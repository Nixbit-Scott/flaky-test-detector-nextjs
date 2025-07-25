'use client';

import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Flaky Test Detector
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AI-Powered Test Reliability Platform
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-2">🤖 AI Detection</h3>
              <p className="text-gray-600">Advanced algorithms detect flaky test patterns automatically</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-2">🔄 Smart Retry Logic</h3>
              <p className="text-gray-600">Intelligent retry strategies based on test history</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-2">📊 Analytics Dashboard</h3>
              <p className="text-gray-600">Comprehensive insights into test reliability</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-2">🚀 CI/CD Integration</h3>
              <p className="text-gray-600">Seamless integration with GitHub, GitLab, and Jenkins</p>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              ✅ Next.js Application Successfully Built and Deployed!
            </p>
            <p className="text-green-600 text-sm mt-1">
              Full dashboard functionality will be restored once authentication is working
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}