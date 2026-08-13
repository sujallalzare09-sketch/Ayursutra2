import React, { useMemo, useState } from "react";
import {
  Activity,
  Bell,
  CalendarDays,
  ChevronRight,
  ClipboardList,
  FileBarChart,
  HeartPulse,
  LayoutDashboard,
  LogOut,
  Menu,
  Moon,
  Search,
  Settings,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Users,
  X,
  Leaf,
  Clock3,
  CheckCircle2,
  AlertCircle,
  Plus,
  ArrowUpRight,
  MoreHorizontal,
  Sparkles
} from "lucide-react";

const initialPatients = [
  {
    id: "PT-1001",
    name: "Rahul Sharma",
    age: 42,
    gender: "Male",
    phone: "+91 98765 43210",
    condition: "Stress & fatigue",
    therapy: "Abhyanga",
    therapist: "Dr. Anjali Rao",
    status: "Active",
    nextSession: "Today · 09:00 AM"
  },
  {
    id: "PT-1002",
    name: "Priya Mehta",
    age: 36,
    gender: "Female",
    phone: "+91 98220 11445",
    condition: "Sleep disturbance",
    therapy: "Shirodhara",
    therapist: "Dr. Kavita Shah",
    status: "Active",
    nextSession: "Today · 10:30 AM"
  },
  {
    id: "PT-1003",
    name: "Amit Patil",
    age: 51,
    gender: "Male",
    phone: "+91 97654 22331",
    condition: "Digestive imbalance",
    therapy: "Swedana",
    therapist: "Dr. Anjali Rao",
    status: "Pending",
    nextSession: "Today · 12:00 PM"
  },
  {
    id: "PT-1004",
    name: "Neha Joshi",
    age: 29,
    gender: "Female",
    phone: "+91 98987 66122",
    condition: "Muscle tension",
    therapy: "Basti",
    therapist: "Dr. Meera Nair",
    status: "Scheduled",
    nextSession: "Tomorrow · 11:00 AM"
  },
  {
    id: "PT-1005",
    name: "Vikram Desai",
    age: 47,
    gender: "Male",
    phone: "+91 98111 88442",
    condition: "Joint discomfort",
    therapy: "Abhyanga",
    therapist: "Dr. Meera Nair",
    status: "Active",
    nextSession: "Tomorrow · 02:00 PM"
  }
];

const therapies = [
  {
    name: "Abhyanga",
    description: "Traditional full-body Ayurvedic oil massage.",
    duration: "45–60 min",
    patients: 24,
    icon: "🌿"
  },
  {
    name: "Shirodhara",
    description: "A calming therapy involving a continuous stream of warm oil.",
    duration: "30–45 min",
    patients: 18,
    icon: "💧"
  },
  {
    name: "Swedana",
    description: "Herbal steam therapy used as part of Panchakarma care.",
    duration: "20–30 min",
    patients: 15,
    icon: "♨️"
  },
  {
    name: "Basti",
    description: "Traditional Ayurvedic therapeutic procedure.",
    duration: "30–45 min",
    patients: 11,
    icon: "🌱"
  },
  {
    name: "Virechana",
    description: "A supervised Panchakarma cleansing procedure.",
    duration: "60–90 min",
    patients: 8,
    icon: "🍃"
  },
  {
    name: "Nasya",
    description: "Ayurvedic nasal therapy performed under supervision.",
    duration: "20–30 min",
    patients: 9,
    icon: "✨"
  }
];

const schedule = [
  {
    time: "09:00 AM",
    patient: "Rahul Sharma",
    therapy: "Abhyanga",
    therapist: "Dr. Anjali Rao",
    status: "Confirmed"
  },
  {
    time: "10:30 AM",
    patient: "Priya Mehta",
    therapy: "Shirodhara",
    therapist: "Dr. Kavita Shah",
    status: "Confirmed"
  },
  {
    time: "12:00 PM",
    patient: "Amit Patil",
    therapy: "Swedana",
    therapist: "Dr. Anjali Rao",
    status: "Pending"
  },
  {
    time: "02:00 PM",
    patient: "Neha Joshi",
    therapy: "Basti",
    therapist: "Dr. Meera Nair",
    status: "Confirmed"
  },
  {
    time: "04:00 PM",
    patient: "Vikram Desai",
    therapy: "Abhyanga",
    therapist: "Dr. Meera Nair",
    status: "Scheduled"
  }
];

const therapists = [
  {
    name: "Dr. Anjali Rao",
    specialization: "Panchakarma Specialist",
    sessions: 126,
    rating: "4.9",
    availability: "Available"
  },
  {
    name: "Dr. Kavita Shah",
    specialization: "Ayurvedic Physician",
    sessions: 98,
    rating: "4.8",
    availability: "In Session"
  },
  {
    name: "Dr. Meera Nair",
    specialization: "Panchakarma Therapist",
    sessions: 84,
    rating: "4.9",
    availability: "Available"
  }
];

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "patients", label: "Patients", icon: Users },
  { id: "therapies", label: "Therapies", icon: Leaf },
  { id: "schedule", label: "Schedule", icon: CalendarDays },
  { id: "therapists", label: "Therapists", icon: Stethoscope },
  { id: "reports", label: "Reports", icon: FileBarChart }
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return <DashboardApp onLogout={() => setLoggedIn(false)} />;
}

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(event) {
    event.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    onLogin();
  }

  return (
    <div className="login-screen">
      <div className="login-decoration decoration-one" />
      <div className="login-decoration decoration-two" />

      <div className="login-card">
        <div className="login-brand">
          <div className="brand-mark large">
            <Leaf size={30} />
          </div>

          <div>
            <h1>AyurSutra</h1>
            <span>Ayurvedic Care Management</span>
          </div>
        </div>

        <div className="login-heading">
          <h2>Welcome back</h2>
          <p>
            Sign in to manage patients, therapies and Panchakarma schedules.
          </p>
        </div>

        <form onSubmit={submit}>
          <label>Email address</label>
          <div className="input-wrap">
            <UserRound size={18} />
            <input
              type="email"
              placeholder="admin@ayursutra.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label>Password</label>
          <div className="input-wrap">
            <ShieldCheck size={18} />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              Remember me
            </label>

            <button type="button" className="text-button">
              Forgot password?
            </button>
          </div>

          <button className="login-button" type="submit">
            Sign in
            <ChevronRight size={18} />
          </button>
        </form>

        <div className="demo-note">
          <Sparkles size={16} />
          <span>Demo mode · Any valid email and password will work</span>
        </div>
      </div>

      <div className="login-footer">
        AyurSutra · Panchakarma Patient Management System
      </div>
    </div>
  );
}

function DashboardApp({ onLogout }) {
  const [activePage, setActivePage] = useState("dashboard");
  const [patients, setPatients] = useState(initialPatients);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  function navigate(page) {
    setActivePage(page);
    setMobileMenu(false);
  }

  function addPatient(patient) {
    const newPatient = {
      ...patient,
      id: `PT-${1000 + patients.length + 1}`,
      status: "Active",
      nextSession: "Not scheduled"
    };

    setPatients((current) => [...current, newPatient]);
    setShowPatientModal(false);
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Sidebar
        activePage={activePage}
        navigate={navigate}
        onLogout={onLogout}
        mobileMenu={mobileMenu}
      />

      <div className="main-area">
        <Header
          activePage={activePage}
          onMenu={() => setMobileMenu((value) => !value)}
          onNotifications={() => setShowNotifications((value) => !value)}
          onTheme={() => setDarkMode((value) => !value)}
        />

        {showNotifications && (
          <NotificationPanel onClose={() => setShowNotifications(false)} />
        )}

        <main className="content">
          {activePage === "dashboard" && (
            <DashboardPage
              patients={patients}
              navigate={navigate}
              onAddPatient={() => setShowPatientModal(true)}
            />
          )}

          {activePage === "patients" && (
            <PatientsPage
              patients={patients}
              onAddPatient={() => setShowPatientModal(true)}
              onSelectPatient={setSelectedPatient}
            />
          )}

          {activePage === "therapies" && <TherapiesPage />}

          {activePage === "schedule" && <SchedulePage />}

          {activePage === "therapists" && <TherapistsPage />}

          {activePage === "reports" && <ReportsPage />}
        </main>
      </div>

      {showPatientModal && (
        <PatientModal
          onClose={() => setShowPatientModal(false)}
          onAdd={addPatient}
        />
      )}

      {selectedPatient && (
        <PatientProfile
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
}

function Sidebar({ activePage, navigate, onLogout, mobileMenu }) {
  return (
    <aside className={mobileMenu ? "sidebar mobile-open" : "sidebar"}>
      <div className="sidebar-brand">
        <div className="brand-mark">
          <Leaf size={23} />
        </div>

        <div>
          <strong>AyurSutra</strong>
          <span>Care Management</span>
        </div>
      </div>

      <div className="clinic-selector">
        <div className="clinic-icon">
          <HeartPulse size={18} />
        </div>

        <div>
          <span>Clinic</span>
          <strong>AyurSutra Wellness</strong>
        </div>

        <ChevronRight size={16} />
      </div>

      <p className="menu-label">MAIN MENU</p>

      <nav className="side-nav">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              className={activePage === item.id ? "nav-item active" : "nav-item"}
              onClick={() => navigate(item.id)}
            >
              <Icon size={19} />
              <span>{item.label}</span>

              {item.id === "patients" && (
                <span className="nav-count">128</span>
              )}
            </button>
          );
        })}
      </nav>

      <p className="menu-label">SYSTEM</p>

      <button className="nav-item" onClick={() => alert("Settings coming soon")}>
        <Settings size={19} />
        <span>Settings</span>
      </button>

      <div className="sidebar-spacer" />

      <div className="sidebar-help">
        <div className="help-icon">
          <Activity size={18} />
        </div>

        <div>
          <strong>System status</strong>
          <span>
            <i />
            All systems operational
          </span>
        </div>
      </div>

      <button className="logout-button" onClick={onLogout}>
        <LogOut size={18} />
        Sign out
      </button>

      <div className="sidebar-user">
        <div className="user-avatar">A</div>

        <div>
          <strong>Administrator</strong>
          <span>Clinic Admin</span>
        </div>

        <MoreHorizontal size={18} />
      </div>
    </aside>
  );
}

function Header({
  activePage,
  onMenu,
  onNotifications,
  onTheme
}) {
  const pageInfo = {
    dashboard: ["Dashboard", "Overview of your Ayurvedic care center"],
    patients: ["Patients", "Manage and monitor patient records"],
    therapies: ["Therapies", "Panchakarma treatments and protocols"],
    schedule: ["Schedule", "Today's therapy appointments"],
    therapists: ["Therapists", "Manage your clinical team"],
    reports: ["Reports", "Insights and performance analytics"]
  };

  const [title, subtitle] = pageInfo[activePage];

  return (
    <header className="topbar">
      <div className="mobile-title">
        <button className="icon-button" onClick={onMenu}>
          <Menu size={21} />
        </button>
      </div>

      <div className="top-title">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="top-actions">
        <div className="global-search">
          <Search size={18} />
          <input placeholder="Search anything..." />
          <kbd>⌘ K</kbd>
        </div>

        <button className="icon-button" onClick={onTheme}>
          <Moon size={19} />
        </button>

        <button className="icon-button notification-button" onClick={onNotifications}>
          <Bell size={19} />
          <span />
        </button>

        <div className="top-avatar">A</div>
      </div>
    </header>
  );
}

function NotificationPanel({ onClose }) {
  return (
    <div className="notification-panel">
      <div className="notification-head">
        <div>
          <h3>Notifications</h3>
          <p>3 new updates</p>
        </div>

        <button className="icon-button" onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      <div className="notification-item">
        <div className="notification-icon green-icon">
          <CalendarDays size={17} />
        </div>

        <div>
          <strong>Upcoming therapy</strong>
          <p>Rahul Sharma has a session at 09:00 AM.</p>
          <small>10 minutes ago</small>
        </div>
      </div>

      <div className="notification-item">
        <div className="notification-icon blue-icon">
          <Users size={17} />
        </div>

        <div>
          <strong>New patient added</strong>
          <p>A new patient record requires review.</p>
          <small>35 minutes ago</small>
        </div>
      </div>

      <div className="notification-item">
        <div className="notification-icon orange-icon">
          <AlertCircle size={17} />
        </div>

        <div>
          <strong>Pending session</strong>
          <p>Amit Patil's therapy is awaiting confirmation.</p>
          <small>1 hour ago</small>
        </div>
      </div>
    </div>
  );
}

function DashboardPage({ patients, navigate, onAddPatient }) {
  const activePatients = patients.filter(
    (patient) => patient.status === "Active"
  ).length;

  return (
    <>
      <div className="welcome-row">
        <div>
          <h1>Good morning, Administrator 👋</h1>
          <p>Here's what's happening at your clinic today.</p>
        </div>

        <button className="primary-button" onClick={onAddPatient}>
          <Plus size={18} />
          Add patient
        </button>
      </div>

      <div className="stats-grid">
        <StatCard
          icon={<Users size={21} />}
          label="Total patients"
          value={patients.length + 123}
          change="+12.5%"
          positive
          description="vs. last month"
        />

        <StatCard
          icon={<Activity size={21} />}
          label="Active therapies"
          value="34"
          change="+8.2%"
          positive
          description="vs. last month"
        />

        <StatCard
          icon={<CalendarDays size={21} />}
          label="Today's sessions"
          value="18"
          change="4 pending"
          description="scheduled today"
        />

        <StatCard
          icon={<CheckCircle2 size={21} />}
          label="Completion rate"
          value="94.2%"
          change="+3.1%"
          positive
          description="this month"
        />
      </div>

      <div className="dashboard-grid">
        <div className="card schedule-card">
          <div className="card-header">
            <div>
              <h3>Today's schedule</h3>
              <p>Therapy sessions for August 13</p>
            </div>

            <button className="outline-button" onClick={() => navigate("schedule")}>
              View all
              <ArrowUpRight size={15} />
            </button>
          </div>

          <div className="schedule-list">
            {schedule.slice(0, 4).map((item) => (
              <ScheduleRow item={item} key={`${item.time}-${item.patient}`} />
            ))}
          </div>
        </div>

        <div className="card overview-card">
          <div className="card-header">
            <div>
              <h3>Therapy overview</h3>
              <p>Current patient distribution</p>
            </div>

            <button className="icon-button">
              <MoreHorizontal size={18} />
            </button>
          </div>

          <TherapyOverview />
        </div>
      </div>

      <div className="dashboard-grid bottom-grid">
        <div className="card">
          <div className="card-header">
            <div>
              <h3>Recent patients</h3>
              <p>Latest patient activity</p>
            </div>

            <button className="outline-button" onClick={() => navigate("patients")}>
              Patients
              <ArrowUpRight size={15} />
            </button>
          </div>

          <div className="patient-list">
            {patients.slice(0, 4).map((patient) => (
              <div className="mini-patient" key={patient.id}>
                <div className="patient-avatar">
                  {getInitials(patient.name)}
                </div>

                <div className="mini-patient-info">
                  <strong>{patient.name}</strong>
                  <span>{patient.therapy}</span>
                </div>

                <StatusBadge status={patient.status} />

                <ChevronRight size={17} className="muted-icon" />
              </div>
            ))}
          </div>
        </div>

        <div className="card wellness-card">
          <div className="wellness-content">
            <div className="wellness-icon">
              <Sparkles size={24} />
            </div>

            <span className="eyebrow">CLINIC INSIGHT</span>

            <h3>
              Your clinic completed <strong>486 sessions</strong> this month.
            </h3>

            <p>
              That's a 14.8% increase compared with the previous month.
            </p>

            <button onClick={() => navigate("reports")}>
              View detailed report
              <ArrowUpRight size={15} />
            </button>
          </div>

          <div className="insight-circle">
            <span>+14.8%</span>
            <small>growth</small>
          </div>
        </div>
      </div>

      <div className="dashboard-footer-note">
        <div>
          <ShieldCheck size={17} />
          <span>Patient data is protected with role-based access.</span>
        </div>

        <span>
          Active patients: <strong>{activePatients + 90}</strong>
        </span>
      </div>
    </>
  );
}

function StatCard({
  icon,
  label,
  value,
  change,
  positive,
  description
}) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>

      <div className="stat-top">
        <span>{label}</span>

        <button className="tiny-more">
          <MoreHorizontal size={16} />
        </button>
      </div>

      <div className="stat-value">{value}</div>

      <div className="stat-change">
        <span className={positive ? "positive" : "neutral"}>
          {change}
        </span>
        <small>{description}</small>
      </div>
    </div>
  );
}

function ScheduleRow({ item }) {
  return (
    <div className="schedule-row">
      <div className="schedule-time">
        <Clock3 size={15} />
        {item.time}
      </div>

      <div className="schedule-patient">
        <div className="patient-avatar small">
          {getInitials(item.patient)}
        </div>

        <div>
          <strong>{item.patient}</strong>
          <span>
            {item.therapy} · {item.therapist}
          </span>
        </div>
      </div>

      <StatusBadge status={item.status} />

      <button className="row-more">
        <MoreHorizontal size={18} />
      </button>
    </div>
  );
}

function TherapyOverview() {
  const data = [
    ["Abhyanga", 78, "24 patients"],
    ["Shirodhara", 62, "18 patients"],
    ["Swedana", 45, "15 patients"],
    ["Basti", 35, "11 patients"]
  ];

  return (
    <div className="therapy-overview">
      {data.map(([name, percent, count]) => (
        <div className="therapy-progress" key={name}>
          <div className="progress-heading">
            <div>
              <strong>{name}</strong>
              <span>{count}</span>
            </div>

            <b>{percent}%</b>
          </div>

          <div className="progress-track">
            <span style={{ width: `${percent}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function PatientsPage({
  patients,
  onAddPatient,
  onSelectPatient
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredPatients = useMemo(() => {
    return patients.filter((patient) => {
      const matchesSearch =
        patient.name.toLowerCase().includes(query.toLowerCase()) ||
        patient.id.toLowerCase().includes(query.toLowerCase()) ||
        patient.therapy.toLowerCase().includes(query.toLowerCase());

      const matchesFilter =
        filter === "All" || patient.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [patients, query, filter]);

  return (
    <>
      <div className="page-heading-row">
        <div>
          <h1>Patients</h1>
          <p>View, manage and monitor all patient records.</p>
        </div>

        <button className="primary-button" onClick={onAddPatient}>
          <Plus size={18} />
          Add new patient
        </button>
      </div>

      <div className="patient-toolbar card">
        <div className="table-search">
          <Search size={18} />
          <input
            placeholder="Search by name, ID or therapy..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          {["All", "Active", "Pending", "Scheduled"].map((item) => (
            <button
              key={item}
              className={filter === item ? "filter active" : "filter"}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="card table-card">
        <div className="table-top">
          <div>
            <h3>Patient records</h3>
            <p>{filteredPatients.length} records displayed</p>
          </div>

          <button className="icon-button">
            <MoreHorizontal size={19} />
          </button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>PATIENT</th>
                <th>AGE / GENDER</th>
                <th>CONDITION</th>
                <th>THERAPY</th>
                <th>THERAPIST</th>
                <th>STATUS</th>
                <th>NEXT SESSION</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {filteredPatients.map((patient) => (
                <tr key={patient.id}>
                  <td>
                    <div className="table-patient">
                      <div className="patient-avatar">
                        {getInitials(patient.name)}
                      </div>

                      <div>
                        <strong>{patient.name}</strong>
                        <span>{patient.id}</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <strong>{patient.age}</strong>
                    <span className="table-sub">{patient.gender}</span>
                  </td>

                  <td>{patient.condition}</td>

                  <td>
                    <span className="therapy-tag">
                      <Leaf size={13} />
                      {patient.therapy}
                    </span>
                  </td>

                  <td>{patient.therapist}</td>

                  <td>
                    <StatusBadge status={patient.status} />
                  </td>

                  <td>{patient.nextSession}</td>

                  <td>
                    <button
                      className="table-action"
                      onClick={() => onSelectPatient(patient)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredPatients.length === 0 && (
            <div className="empty-state">
              <Search size={30} />
              <h3>No patients found</h3>
              <p>Try a different search or filter.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function PatientModal({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Female");
  const [phone, setPhone] = useState("");
  const [condition, setCondition] = useState("");
  const [therapy, setTherapy] = useState("Abhyanga");
  const [therapist, setTherapist] = useState("Dr. Anjali Rao");

  function submit(event) {
    event.preventDefault();

    if (!name || !age || !phone || !condition) {
      alert("Please complete all required fields.");
      return;
    }

    onAdd({
      name,
      age: Number(age),
      gender,
      phone,
      condition,
      therapy,
      therapist
    });
  }

  return (
    <Modal onClose={onClose}>
      <div className="modal-heading">
        <div className="modal-icon">
          <Users size={21} />
        </div>

        <div>
          <h2>Add new patient</h2>
          <p>Create a patient record for Ayurvedic care.</p>
        </div>
      </div>

      <form className="patient-form" onSubmit={submit}>
        <div className="form-grid">
          <div className="form-field full">
            <label>Full name *</label>
            <input
              placeholder="e.g. Ananya Kulkarni"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Age *</label>
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-field full">
            <label>Phone number *</label>
            <input
              placeholder="+91 XXXXX XXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-field full">
            <label>Primary concern *</label>
            <input
              placeholder="e.g. Stress, digestive imbalance..."
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Therapy</label>
            <select
              value={therapy}
              onChange={(e) => setTherapy(e.target.value)}
            >
              {therapies.map((item) => (
                <option key={item.name}>{item.name}</option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label>Therapist</label>
            <select
              value={therapist}
              onChange={(e) => setTherapist(e.target.value)}
            >
              {therapists.map((item) => (
                <option key={item.name}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="secondary-button" onClick={onClose}>
            Cancel
          </button>

          <button className="primary-button" type="submit">
            <Plus size={17} />
            Create patient
          </button>
        </div>
      </form>
    </Modal>
  );
}

function PatientProfile({ patient, onClose }) {
  return (
    <Modal onClose={onClose} wide>
      <div className="profile-heading">
        <div className="profile-avatar">
          {getInitials(patient.name)}
        </div>

        <div className="profile-main-info">
          <div>
            <h2>{patient.name}</h2>
            <span>{patient.id} · {patient.age} years · {patient.gender}</span>
          </div>

          <StatusBadge status={patient.status} />
        </div>
      </div>

      <div className="profile-tabs">
        <button className="active">Overview</button>
        <button>Treatment plan</button>
        <button>Session history</button>
        <button>Notes</button>
      </div>

      <div className="profile-grid">
        <div className="profile-section">
          <h3>Patient information</h3>

          <div className="detail-grid">
            <Detail label="Phone" value={patient.phone} />
            <Detail label="Primary concern" value={patient.condition} />
            <Detail label="Current therapy" value={patient.therapy} />
            <Detail label="Therapist" value={patient.therapist} />
          </div>
        </div>

        <div className="profile-section">
          <h3>Next session</h3>

          <div className="next-session">
            <div className="next-session-icon">
              <CalendarDays size={22} />
            </div>

            <div>
              <strong>{patient.nextSession}</strong>
              <span>{patient.therapy} · {patient.therapist}</span>
            </div>
          </div>
        </div>

        <div className="profile-section full-profile">
          <h3>Treatment progress</h3>

          <div className="treatment-progress">
            <div>
              <span>Overall plan completion</span>
              <strong>72%</strong>
            </div>

            <div className="progress-track large">
              <span style={{ width: "72%" }} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

function Detail({ label, value }) {
  return (
    <div className="detail">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function TherapiesPage() {
  const [search, setSearch] = useState("");

  const visibleTherapies = therapies.filter((therapy) =>
    therapy.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="page-heading-row">
        <div>
          <h1>Panchakarma therapies</h1>
          <p>Manage treatments and therapy protocols.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => alert("Therapy creation module opened")}
        >
          <Plus size={18} />
          Add therapy
        </button>
      </div>

      <div className="therapy-search card">
        <Search size={18} />
        <input
          placeholder="Search therapies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="therapy-grid">
        {visibleTherapies.map((therapy) => (
          <div className="therapy-card" key={therapy.name}>
            <div className="therapy-card-top">
              <div className="big-therapy-icon">{therapy.icon}</div>

              <button className="icon-button">
                <MoreHorizontal size={18} />
              </button>
            </div>

            <h3>{therapy.name}</h3>

            <p>{therapy.description}</p>

            <div className="therapy-meta">
              <span>
                <Clock3 size={15} />
                {therapy.duration}
              </span>

              <span>
                <Users size={15} />
                {therapy.patients} patients
              </span>
            </div>

            <div className="therapy-card-bottom">
              <span className="protocol-status">
                <CheckCircle2 size={14} />
                Protocol active
              </span>

              <button onClick={() => alert(`${therapy.name} selected`)}>
                Schedule
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState("13");

  return (
    <>
      <div className="page-heading-row">
        <div>
          <h1>Therapy schedule</h1>
          <p>Coordinate patients, therapists and treatment rooms.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => alert("New session module opened")}
        >
          <Plus size={18} />
          New session
        </button>
      </div>

      <div className="calendar-card card">
        <div className="calendar-top">
          <div>
            <h3>August 2026</h3>
            <p>Thursday, August 13</p>
          </div>

          <div className="calendar-controls">
            <button>‹</button>
            <button>›</button>
          </div>
        </div>

        <div className="date-strip">
          {[
            ["10", "Mon"],
            ["11", "Tue"],
            ["12", "Wed"],
            ["13", "Thu"],
            ["14", "Fri"],
            ["15", "Sat"],
            ["16", "Sun"]
          ].map(([date, day]) => (
            <button
              key={date}
              className={selectedDate === date ? "date active" : "date"}
              onClick={() => setSelectedDate(date)}
            >
              <span>{day}</span>
              <strong>{date}</strong>
            </button>
          ))}
        </div>
      </div>

      <div className="card schedule-full">
        <div className="card-header">
          <div>
            <h3>Appointments</h3>
            <p>5 sessions scheduled for today</p>
          </div>

          <div className="schedule-summary">
            <span><i className="dot confirmed" />Confirmed</span>
            <span><i className="dot pending" />Pending</span>
          </div>
        </div>

        <div className="timeline">
          {schedule.map((item) => (
            <div className="timeline-row" key={item.time}>
              <div className="timeline-time">{item.time}</div>

              <div className="timeline-line">
                <span />
              </div>

              <div className="timeline-content">
                <div>
                  <strong>{item.patient}</strong>
                  <p>
                    {item.therapy} · {item.therapist}
                  </p>
                </div>

                <StatusBadge status={item.status} />

                <button className="row-more">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function TherapistsPage() {
  return (
    <>
      <div className="page-heading-row">
        <div>
          <h1>Therapists</h1>
          <p>Manage your Ayurvedic clinical team.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => alert("Add therapist module opened")}
        >
          <Plus size={18} />
          Add therapist
        </button>
      </div>

      <div className="therapist-grid">
        {therapists.map((therapist) => (
          <div className="card therapist-card" key={therapist.name}>
            <div className="therapist-top">
              <div className="therapist-avatar">
                {getInitials(therapist.name)}
              </div>

              <span
                className={
                  therapist.availability === "Available"
                    ? "availability available"
                    : "availability busy"
                }
              >
                <i />
                {therapist.availability}
              </span>
            </div>

            <h3>{therapist.name}</h3>
            <p>{therapist.specialization}</p>

            <div className="therapist-stats">
              <div>
                <strong>{therapist.sessions}</strong>
                <span>Sessions</span>
              </div>

              <div>
                <strong>★ {therapist.rating}</strong>
                <span>Rating</span>
              </div>
            </div>

            <button
              className="full-outline"
              onClick={() => alert(`${therapist.name} profile opened`)}
            >
              View profile
              <ArrowUpRight size={15} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function ReportsPage() {
  const bars = [52, 66, 58, 76, 70, 88, 82, 94, 78, 90, 85, 97];

  return (
    <>
      <div className="page-heading-row">
        <div>
          <h1>Reports & analytics</h1>
          <p>Understand clinic performance and treatment activity.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => window.print()}
        >
          <FileBarChart size={18} />
          Export report
        </button>
      </div>

      <div className="report-stats">
        <div className="card report-stat">
          <span>Total sessions</span>
          <strong>486</strong>
          <small className="positive">↑ 14.8% from last month</small>
        </div>

        <div className="card report-stat">
          <span>New patients</span>
          <strong>42</strong>
          <small className="positive">↑ 9.3% from last month</small>
        </div>

        <div className="card report-stat">
          <span>Completion rate</span>
          <strong>94.2%</strong>
          <small className="positive">↑ 3.1% from last month</small>
        </div>

        <div className="card report-stat">
          <span>Avg. sessions / patient</span>
          <strong>4.6</strong>
          <small className="neutral">Stable</small>
        </div>
      </div>

      <div className="reports-grid">
        <div className="card chart-card">
          <div className="card-header">
            <div>
              <h3>Therapy sessions</h3>
              <p>Monthly sessions across all therapies</p>
            </div>

            <select className="chart-select">
              <option>Last 12 months</option>
              <option>Last 6 months</option>
              <option>This year</option>
            </select>
          </div>

          <div className="bar-chart">
            {bars.map((height, index) => (
              <div className="bar-column" key={index}>
                <div className="bar-value">{height * 5}</div>
                <div
                  className="bar"
                  style={{ height: `${height}%` }}
                />
                <span>
                  {
                    [
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug"
                    ][index]
                  }
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div>
              <h3>Therapy distribution</h3>
              <p>Sessions by treatment</p>
            </div>
          </div>

          <div className="distribution">
            {[
              ["Abhyanga", 34],
              ["Shirodhara", 25],
              ["Swedana", 18],
              ["Basti", 13],
              ["Other", 10]
            ].map(([name, value]) => (
              <div className="distribution-row" key={name}>
                <div>
                  <span>{name}</span>
                  <strong>{value}%</strong>
                </div>

                <div className="progress-track">
                  <span style={{ width: `${value * 2.5}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function StatusBadge({ status }) {
  const normalized = status.toLowerCase();

  let className = "status-badge";

  if (normalized.includes("active") || normalized.includes("confirmed")) {
    className += " success";
  } else if (normalized.includes("pending")) {
    className += " warning";
  } else {
    className += " info";
  }

  return (
    <span className={className}>
      <i />
      {status}
    </span>
  );
}

function Modal({ children, onClose, wide = false }) {
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className={wide ? "modal modal-wide" : "modal"}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default App;
