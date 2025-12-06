'use client';

import { useState } from 'react';

export function CitizenFeedbackForm() {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        category: '',
        priority: '',
        description: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', location: '', category: '', priority: '', description: '' });
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">📝 Soumettre un Signalement</h3>
            
            {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="text-5xl mb-3">✓</div>
                    <h4 className="text-xl font-bold text-green-800 mb-2">Signalement Enregistré !</h4>
                    <p className="text-green-700">
                        Merci pour votre contribution. Votre signalement a été transmis aux équipes concernées.
                        Vous recevrez une notification dès qu'une action sera entreprise.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                Nom / Organisation
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-neutral-900"
                                placeholder="Votre nom"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                Localisation
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-neutral-900"
                                placeholder="Ex: Antananarivo, Fianarantsoa, Toliara..."
                                required
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                Catégorie
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-neutral-900"
                                required
                            >
                                <option value="">Sélectionner...</option>
                                <option value="infrastructure">Infrastructure (routes, ponts)</option>
                                <option value="education">Éducation (écoles, EPP)</option>
                                <option value="sante">Santé (CSB, hôpitaux)</option>
                                <option value="environnement">Environnement (déforestation, déchets)</option>
                                <option value="eau">Eau potable & assainissement</option>
                                <option value="autres">Autres</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                Priorité
                            </label>
                            <select
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-neutral-900"
                                required
                            >
                                <option value="">Sélectionner...</option>
                                <option value="faible">Faible</option>
                                <option value="moyenne">Moyenne</option>
                                <option value="elevee">Élevée</option>
                                <option value="urgente">Urgente</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-neutral-900"
                            placeholder="Décrivez votre signalement en détail..."
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Envoyer le Signalement
                    </button>
                </form>
            )}
        </div>
    );
}
