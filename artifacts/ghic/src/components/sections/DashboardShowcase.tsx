import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Bell, Search, LayoutDashboard, ListTodo, Activity, Tag, Webhook, Settings, CheckCircle2, AlertCircle } from 'lucide-react';

const velocityData = Array.from({ length: 30 }).map((_, i) => ({
  day: i + 1,
  resolved: Math.floor(Math.random() * 20) + 5 + (i * 0.5)
}));

const priorityData = [
  { name: 'P1', count: 12 },
  { name: 'P2', count: 28 },
  { name: 'P3', count: 45 },
  { name: 'P4', count: 15 },
];

const typeData = [
  { name: 'Bug', value: 40, color: '#ef4444' },
  { name: 'Feature', value: 35, color: '#3b82f6' },
  { name: 'Docs', value: 15, color: '#10b981' },
  { name: 'Other', value: 10, color: '#8b5cf6' },
];

const recentActivity = [
  { id: '#1250', title: 'Memory leak in worker pool', status: 'P1', time: '2m ago' },
  { id: '#1249', title: 'Update README installation steps', status: 'P4', time: '15m ago' },
  { id: '#1248', title: 'Add dark mode support', status: 'P2', time: '1h ago' },
  { id: '#1247', title: 'API returns 500 on token refresh', status: 'P1', time: '2h ago' },
  { id: '#1246', title: 'Fix typo in settings page', status: 'P4', time: '3h ago' },
];

export function DashboardShowcase() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Your repository's intelligence, at a glance.
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden flex flex-col md:flex-row h-[800px]"
        >
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-secondary/30 border-r border-border p-4 flex flex-col hidden md:flex">
            <div className="flex items-center gap-2 px-2 mb-8">
              <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-primary">
                <LayoutDashboard className="w-4 h-4" />
              </div>
              <span className="font-semibold">Acme Corp</span>
            </div>

            <nav className="space-y-1">
              {[
                { icon: LayoutDashboard, label: 'Dashboard', active: true },
                { icon: ListTodo, label: 'Issues' },
                { icon: Activity, label: 'Analytics' },
                { icon: Tag, label: 'Labels' },
                { icon: Webhook, label: 'Webhooks' },
                { icon: Settings, label: 'Settings' },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${item.active ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}>
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden bg-background">
            {/* Header */}
            <header className="h-14 border-b border-border flex items-center justify-between px-6 bg-card/50">
              <div className="flex items-center gap-4">
                <div className="px-3 py-1.5 rounded-md bg-secondary text-sm font-medium border border-border flex items-center gap-2 cursor-pointer">
                  acme/backend <span className="text-muted-foreground opacity-50">▾</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Search className="w-4 h-4 cursor-pointer hover:text-foreground" />
                <Bell className="w-4 h-4 cursor-pointer hover:text-foreground" />
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">
                  JS
                </div>
              </div>
            </header>

            {/* Dashboard Grid */}
            <div className="p-6 overflow-y-auto">
              {/* Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Processed Today", value: "47", change: "+12%" },
                  { label: "Avg Triage Time", value: "2.3m", change: "-8%" },
                  { label: "Duplicate Rate", value: "18%", change: "-2%" },
                  { label: "Prediction Accuracy", value: "96.2%", change: "+0.4%" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl border border-border bg-card">
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <div className="flex items-end gap-2">
                      <h4 className="text-2xl font-bold">{stat.value}</h4>
                      <span className={`text-xs font-medium mb-1 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-primary'}`}>{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-2 p-6 rounded-xl border border-border bg-card">
                  <h4 className="font-semibold mb-4">Resolution Velocity (30d)</h4>
                  <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={velocityData}>
                        <defs>
                          <linearGradient id="colorVelocity" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="day" hide />
                        <YAxis hide />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                          itemStyle={{ color: 'hsl(var(--foreground))' }}
                        />
                        <Area type="monotone" dataKey="resolved" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorVelocity)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-border bg-card flex flex-col">
                  <h4 className="font-semibold mb-4">Issues by Priority</h4>
                  <div className="flex-1 w-full min-h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={priorityData} layout="vertical" margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))'}} />
                        <Tooltip cursor={{fill: 'hsl(var(--secondary))'}} contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}/>
                        <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={24} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 p-6 rounded-xl border border-border bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Recent Intelligence Activity</h4>
                    <button className="text-sm text-primary hover:underline">View all</button>
                  </div>
                  <div className="space-y-4">
                    {recentActivity.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors border border-transparent hover:border-border">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <div>
                            <p className="text-sm font-medium">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.id} • Processed {item.time}</p>
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs font-medium border ${item.status === 'P1' ? 'bg-red-500/10 text-red-500 border-red-500/20' : item.status === 'P2' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' : 'bg-blue-500/10 text-blue-500 border-blue-500/20'}`}>
                          {item.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-border bg-card">
                  <h4 className="font-semibold mb-4">Type Distribution</h4>
                  <div className="h-[200px] w-full flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={typeData}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                          stroke="none"
                        >
                          {typeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {typeData.map((type, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: type.color }} />
                        {type.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
