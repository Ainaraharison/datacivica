'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function SystemMetricsChart() {
    const [data, setData] = useState([
        { time: '00:00', cpu: 45, memory: 62, disk: 35 },
        { time: '00:05', cpu: 52, memory: 65, disk: 36 },
        { time: '00:10', cpu: 48, memory: 68, disk: 37 },
        { time: '00:15', cpu: 55, memory: 70, disk: 38 },
        { time: '00:20', cpu: 60, memory: 72, disk: 39 }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setData((prev) => {
                const newTime = new Date();
                const timeStr = `${String(newTime.getHours()).padStart(2, '0')}:${String(newTime.getMinutes()).padStart(2, '0')}`;
                
                const newData = [
                    ...prev.slice(-9),
                    {
                        time: timeStr,
                        cpu: Math.max(20, Math.min(90, prev[prev.length - 1].cpu + (Math.random() - 0.5) * 20)),
                        memory: Math.max(40, Math.min(95, prev[prev.length - 1].memory + (Math.random() - 0.5) * 10)),
                        disk: Math.max(30, Math.min(80, prev[prev.length - 1].disk + (Math.random() - 0.5) * 5))
                    }
                ];
                
                return newData;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Métriques Système en Temps Réel</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" stroke="#374151" />
                    <YAxis stroke="#374151" domain={[0, 100]} />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                        labelStyle={{ color: '#374151' }}
                        formatter={(value) => `${Math.round(value)}%`}
                    />
                    <Legend />
                    <Line 
                        type="monotone" 
                        dataKey="cpu" 
                        stroke="#2bdcd2" 
                        strokeWidth={2}
                        name="CPU"
                        dot={false}
                    />
                    <Line 
                        type="monotone" 
                        dataKey="memory" 
                        stroke="#016968" 
                        strokeWidth={2}
                        name="Mémoire"
                        dot={false}
                    />
                    <Line 
                        type="monotone" 
                        dataKey="disk" 
                        stroke="#0ea5e9" 
                        strokeWidth={2}
                        name="Disque I/O"
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
