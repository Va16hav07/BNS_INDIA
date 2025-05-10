import React from 'react';

const highlights = [
  {
    icon: '🏫',
    title: 'Turn Your School into a Tech Hub',
    school: 'Get 50% subsidy on AI lab setup',
    student: 'Free access to ₹25K/yr coding courses',
    data: '500+ schools already enrolled'
  },
  {
    icon: '🤖',
    title: 'NEP 2020 Ready Curriculum',
    school: 'Pre-approved lesson plans save 10+ hrs/week',
    student: 'Earn govt-recognized stage-wise certifications'
  },
  {
    icon: '💰',
    title: 'Scholarships That Matter',
    school: 'Attract top talent with 25-100% fee waivers',
    student: 'Stipends for national competition winners'
  },
  {
    icon: '🔗',
    title: 'Industry Connections',
    school: 'Microsoft/ISRO collaboration opportunities',
    student: 'Guaranteed internship interviews'
  },
  {
    icon: '📈',
    title: 'Proven Impact',
    school: '92% member schools improved STEM enrollment',
    student: '3X more student startups vs. non-member schools'
  }
];

const promptTemplate = `### Prompt for Generating Program Highlights\n**Context**: You're creating promotional content for the BNS Future Leaders Membership Program, targeting school administrators and students.\n\n**Instructions**:\nGenerate 5-7 concise, benefit-driven highlights that:\n1. Emphasize **dual value** (schools + students)\n2. Use **power words** (Exclusive, Guaranteed, Priority)\n3. Include **numbers/percentages** for impact\n4. Align with **NEP 2020** and **industry needs**\n5. End with a **strong CTA**\n\n**Format**:\n🔹 [Icon] **Highlight Title**\n   - Benefit 1 (School-focused)\n   - Benefit 2 (Student-focused)\n   *(Data point where relevant)*`;

const customizationTips = [
  'For Social Media: Add emojis + shorten to 3 highlights',
  'For Principals: Focus on ROI (e.g., "Increase school rankings")',
  'For Students: Highlight peer success stories'
];

const Highlights = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-4">BNS Membership Program Highlights</h1>
        <p className="text-center text-lg text-gray-700 dark:text-gray-200 mb-8">
          Use these highlights and the prompt template to create powerful social media, email, and presentation content for the BNS Future Leaders Membership Program.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-2">Prompt Template</h2>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap mb-4 border border-blue-200 dark:border-gray-700">
{promptTemplate}
          </pre>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-2">Example Output</h2>
          <div className="space-y-6">
            {highlights.map((h, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow p-5 border border-blue-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{h.icon}</span>
                  <span className="font-bold text-lg text-blue-900 dark:text-blue-200">{h.title}</span>
                </div>
                <ul className="ml-8 text-gray-800 dark:text-gray-200">
                  <li><span className="font-semibold">For Schools:</span> {h.school}</li>
                  <li><span className="font-semibold">For Students:</span> {h.student}</li>
                  {h.data && <li className="text-xs mt-1 text-blue-700 dark:text-blue-300">({h.data})</li>}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center font-semibold text-blue-700 dark:text-blue-300 text-lg">
            CTA: "Join India's fastest-growing school tech network! Applications close Oct 30."
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-2">Customization Tips</h2>
          <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200">
            {customizationTips.map((tip, i) => <li key={i}>{tip}</li>)}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-2">Need Platform-Specific Variants?</h2>
          <p className="text-gray-700 dark:text-gray-200">Want WhatsApp, LinkedIn, or other platform-optimized highlight sets? <span className="font-semibold">Let us know!</span></p>
        </section>
      </div>
    </div>
  );
};

export default Highlights; 