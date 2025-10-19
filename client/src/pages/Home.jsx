
import React, { useState } from 'react';
import { Plus, Upload, Heart, Calendar, FileText, TrendingUp, Download, Trash2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');
  const [reports, setReports] = useState([
    { id: 1, name: 'Blood Test', date: '2025-10-15', type: 'Lab Report', status: 'analyzed' },
    { id: 2, name: 'X-Ray Report', date: '2025-10-10', type: 'Imaging', status: 'analyzed' },
  ]);
  const [vitals, setVitals] = useState([
    { id: 1, date: '2025-10-18', bp: '130/80', sugar: 95, weight: 72, notes: 'Morning reading' },
    { id: 2, date: '2025-10-15', bp: '128/78', sugar: 92, weight: 71.5, notes: 'After exercise' },
  ]);
  const [showVitalForm, setShowVitalForm] = useState(false);
  const [newVital, setNewVital] = useState({
    date: new Date().toISOString().split('T')[0],
    bp: '',
    sugar: '',
    weight: '',
    notes: ''
  });

  const addVital = () => {
    if (newVital.date) {
      setVitals([{ id: Date.now(), ...newVital }, ...vitals]);
      setNewVital({
        date: new Date().toISOString().split('T')[0],
        bp: '',
        sugar: '',
        weight: '',
        notes: ''
      });
      setShowVitalForm(false);
    }
  };

  const deleteReport = (id) => {
    setReports(reports.filter(r => r.id !== id));
  };

  const deleteVital = (id) => {
    setVitals(vitals.filter(v => v.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <Navbar/>
 

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'reports', label: 'My Reports', icon: '📄' },
              { id: 'vitals', label: 'Vitals', icon: '💓' },
              { id: 'timeline', label: 'Timeline', icon: '📅' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 font-medium text-sm flex items-center gap-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <span>{tab.icon}</span> {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Total Reports</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{reports.length}</p>
                  </div>
                  <FileText className="w-12 h-12 text-blue-500 opacity-20" />
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Vitals Tracked</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{vitals.length}</p>
                  </div>
                  <Heart className="w-12 h-12 text-red-500 opacity-20" />
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Last Vitals</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{vitals[0]?.bp || 'N/A'}</p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-green-500 opacity-20" />
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Last Check</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{new Date(vitals[0]?.date).toLocaleDateString()}</p>
                  </div>
                  <Calendar className="w-12 h-12 text-purple-500 opacity-20" />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-colors">
                  <Upload className="w-5 h-5" /> Upload Medical Report
                </button>
                <button
                  onClick={() => setShowVitalForm(!showVitalForm)}
                  className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  <Plus className="w-5 h-5" /> Add Manual Vitals
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Medical Reports</h2>
              <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                <Upload className="w-5 h-5" /> Upload Report
              </button>
            </div>
            <div className="space-y-4">
              {reports.map(report => (
                <div key={report.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg">
                        <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{report.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{report.type} • {new Date(report.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium px-3 py-1 rounded-full">
                        {report.status}
                      </span>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <Download className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </button>
                      <button
                        onClick={() => deleteReport(report.id)}
                        className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vitals Tab */}
        {activeTab === 'vitals' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Health Vitals</h2>
              <button
                onClick={() => setShowVitalForm(!showVitalForm)}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <Plus className="w-5 h-5" /> Add Vital
              </button>
            </div>

            {/* Add Vital Form */}
            {showVitalForm && (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add Manual Vitals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date</label>
                    <input
                      type="date"
                      value={newVital.date}
                      onChange={(e) => setNewVital({ ...newVital, date: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Blood Pressure (e.g., 130/80)</label>
                    <input
                      type="text"
                      value={newVital.bp}
                      onChange={(e) => setNewVital({ ...newVital, bp: e.target.value })}
                      placeholder="130/80"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Blood Sugar (mg/dL)</label>
                    <input
                      type="number"
                      value={newVital.sugar}
                      onChange={(e) => setNewVital({ ...newVital, sugar: e.target.value })}
                      placeholder="95"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Weight (kg)</label>
                    <input
                      type="number"
                      value={newVital.weight}
                      onChange={(e) => setNewVital({ ...newVital, weight: e.target.value })}
                      placeholder="72"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Notes</label>
                    <input
                      type="text"
                      value={newVital.notes}
                      onChange={(e) => setNewVital({ ...newVital, notes: e.target.value })}
                      placeholder="e.g., Morning reading, After exercise"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={addVital}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Save Vital
                  </button>
                  <button
                    onClick={() => setShowVitalForm(false)}
                    className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Vitals List */}
            <div className="space-y-4">
              {vitals.map(vital => (
                <div key={vital.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white">{new Date(vital.date).toLocaleDateString()}</p>
                      <div className="grid grid-cols-3 gap-4 mt-2">
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">BP</p>
                          <p className="text-lg font-bold text-gray-900 dark:text-white">{vital.bp}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Sugar</p>
                          <p className="text-lg font-bold text-gray-900 dark:text-white">{vital.sugar} mg/dL</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Weight</p>
                          <p className="text-lg font-bold text-gray-900 dark:text-white">{vital.weight} kg</p>
                        </div>
                      </div>
                      {vital.notes && <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{vital.notes}</p>}
                    </div>
                    <button
                      onClick={() => deleteVital(vital.id)}
                      className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline Tab */}
        {activeTab === 'timeline' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Medical Timeline</h2>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-indigo-300 dark:bg-indigo-700"></div>
              <div className="space-y-6">
                {[...reports.map(r => ({ ...r, type: 'report' })), ...vitals.map(v => ({ ...v, type: 'vital', id: v.id + 1000 }))].sort((a, b) => new Date(b.date) - new Date(a.date)).map((item, idx) => (
                  <div key={item.id} className="relative pl-20">
                    <div className="absolute left-0 top-2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full border-4 border-indigo-600 flex items-center justify-center">
                      {item.type === 'report' ? <FileText className="w-6 h-6 text-indigo-600" /> : <Heart className="w-6 h-6 text-red-500" />}
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {item.type === 'report' ? item.name : 'Vitals Check'}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{new Date(item.date).toLocaleDateString()}</p>
                          {item.type === 'vital' && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">BP: {item.bp} | Sugar: {item.sugar} | Weight: {item.weight}kg</p>
                          )}
                        </div>
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${item.type === 'report' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200'}`}>
                          {item.type === 'report' ? 'Report' : 'Vitals'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
 
 <div>
  <Footer/>
 </div>
      </div>
    </div>
  );
}