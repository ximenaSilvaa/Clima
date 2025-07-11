import Navbar from '../componentes/Navbar';
import {
  Users,
  CreditCard,
  UserCheck,
  GraduationCap
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';

const Dashboard = () => {
  // Data for charts
  const turnosData = [
    { name: 'Matutino', value: 125, percentage: 51 },
    { name: 'Vespertino', value: 98, percentage: 40 },
    { name: 'Terapia Individual', value: 22, percentage: 9 }
  ];

  const edadesData = [
    { name: '3-6 años', value: 45 },
    { name: '7-12 años', value: 98 },
    { name: '13-17 años', value: 87 },
    { name: '18+ años', value: 15 }
  ];

  const pagosData = [
    { name: 'Pagado', value: 156, percentage: 64 },
    { name: 'Pago Parcial', value: 34, percentage: 14 },
    { name: 'Becado', value: 28, percentage: 11 },
    { name: 'Adeudo', value: 27, percentage: 11 }
  ];

  const progresoData = [
    { name: 'Comunicación', value: 78 },
    { name: 'Habilidades Sociales', value: 65 },
    { name: 'Autonomía', value: 71 }
  ];

  const asistenciaData = [
    { name: 'Ene', General: 90, Matutino: 92, Vespertino: 89, Individual: 94 },
    { name: 'Feb', General: 88, Matutino: 90, Vespertino: 87, Individual: 95 },
    { name: 'Mar', General: 91, Matutino: 93, Vespertino: 90, Individual: 96 },
    { name: 'Abr', General: 93, Matutino: 95, Vespertino: 92, Individual: 97 },
    { name: 'May', General: 92, Matutino: 94, Vespertino: 91, Individual: 96 },
    { name: 'Jun', General: 94, Matutino: 96, Vespertino: 93, Individual: 98 }
  ];

  const personalData = [
    { name: 'Terapeutas', value: 18 },
    { name: 'Maestros', value: 12 },
    { name: 'BCBA', value: 6 },
    { name: 'Terapeutas Lenguaje', value: 8 },
    { name: 'Terapeutas Ocupacionales', value: 5 }
  ];

  const evolucionData = [
    { name: 'Ene', estudiantes: 230 },
    { name: 'Feb', estudiantes: 235 },
    { name: 'Mar', estudiantes: 240 },
    { name: 'Abr', estudiantes: 242 },
    { name: 'May', estudiantes: 244 },
    { name: 'Jun', estudiantes: 245 }
  ];

  // Colors
  const turnosColors = ['#3B82F6', '#10B981', '#F59E0B'];
  const pagosColors = ['#10B981', '#F59E0B', '#3B82F6', '#EF4444'];

  const MetricCard = ({ title, value, subtitle, icon: Icon, color }: any) => (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white/80 text-sm font-medium">{title}</h3>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
          <p className="text-sm text-white/70 mt-1">{subtitle}</p>
        </div>
        <div className={`p-3 rounded-lg ${color} bg-white/20`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
              {entry.payload.percentage && ` (${entry.payload.percentage}%)`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#135078] text-white">
      <Navbar />
      
      {/* Header */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center font-serif mb-2">Dashboard - Escuela de Clima para Autismo</h1>
          <p className="text-white/80 text-center text-lg">Panel de control y métricas principales</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Estudiantes"
            value="245"
            subtitle="Estudiantes activos"
            icon={Users}
            color="bg-blue-500"
          />
          <MetricCard
            title="Personal Total"
            value="49"
            subtitle="Profesionales"
            icon={GraduationCap}
            color="bg-green-500"
          />
          <MetricCard
            title="Asistencia General"
            value="92%"
            subtitle="Promedio mensual"
            icon={UserCheck}
            color="bg-purple-500"
          />
          <MetricCard
            title="Pagos al día"
            value="64%"
            subtitle="156 estudiantes"
            icon={CreditCard}
            color="bg-emerald-500"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Distribución por Turnos */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Distribución por Turnos</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={turnosData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {turnosData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={turnosColors[index % turnosColors.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center mt-4">
              <div className="flex flex-wrap gap-4">
                {turnosData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: turnosColors[index] }}
                    />
                    <span className="text-sm text-white/80">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Distribución por Edades */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Distribución por Edades</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={edadesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Estados de Pago */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Estados de Pago</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pagosData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pagosData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pagosColors[index % pagosColors.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center mt-4">
              <div className="flex flex-wrap gap-4">
                {pagosData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: pagosColors[index] }}
                    />
                    <span className="text-sm text-white/80">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progreso Terapéutico */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Progreso Terapéutico</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={progresoData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                <XAxis type="number" domain={[0, 100]} stroke="white" />
                <YAxis type="category" dataKey="name" width={120} stroke="white" />
                <Tooltip formatter={(value) => [`${value}%`, 'Progreso']} />
                <Bar dataKey="value" fill="#10B981" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Asistencia por Turno */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Asistencia por Turno</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={asistenciaData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis domain={[80, 100]} stroke="white" />
                <Tooltip formatter={(value) => [`${value}%`, 'Asistencia']} />
                <Line type="monotone" dataKey="General" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="Matutino" stroke="#82ca9d" strokeWidth={2} />
                <Line type="monotone" dataKey="Vespertino" stroke="#ffc658" strokeWidth={2} />
                <Line type="monotone" dataKey="Individual" stroke="#ff7300" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Personal */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Distribución de Personal</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={personalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} stroke="white" />
                <YAxis stroke="white" />
                <Tooltip />
                <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Evolución Mensual */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Evolución Mensual de Estudiantes</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={evolucionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis domain={[220, 250]} stroke="white" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="estudiantes"
                  stroke="#3B82F6"
                  fill="url(#colorGradient)"
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;