import { DotsVerticalIcon } from '@heroicons/react/solid';

const skillsAndTools = [
  { name: 'Python', initials: 'PY', Language: 'Programming Language', bgColor: 'bg-yellow-500' },
  { name: 'NumPy', initials: 'NP', Language: 'Library', bgColor: 'bg-blue-500' },
  { name: 'Pandas', initials: 'PD', Language: 'Library', bgColor: 'bg-blue-500' },
  { name: 'Matplotlib', initials: 'MT', Language: 'Library', bgColor: 'bg-green-500' },
  { name: 'Scikit-learn', initials: 'SK', Language: 'Library', bgColor: 'bg-green-600' },
  { name: 'TensorFlow', initials: 'TF', Language: 'Library', bgColor: 'bg-green-700' },
  { name: 'Keras', initials: 'KR', Language: 'Library', bgColor: 'bg-green-800' },
  { name: 'Jupyter', initials: 'JN', Language: 'Notebook', bgColor: 'bg-blue-400' },
  { name: 'SQL', initials: 'SQL', Language: 'Database Query', bgColor: 'bg-slate-800' },
  { name: 'Git', initials: 'GIT', Language: 'Version Control', bgColor: 'bg-orange-700' },
  { name: 'Linux', initials: 'LNX', Language: 'Operating System', bgColor: 'bg-orange-500' },
  { name: 'Docker', initials: 'DKR', Language: 'Containerization', bgColor: 'bg-blue-400' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SkillsAndTools() {
  return (
    <div className='max-w-7xl mt-4 mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Skills & Tools</h2>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
        {skillsAndTools.map((item) => (
          <li key={item.name} className="col-span-1 flex shadow-sm rounded-md">
            <div
              className={classNames(
                item.bgColor,
                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
              )}
            >
              {item.initials}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate dark:bg-cus-blue-100">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <div className="text-gray-900 font-medium hover:text-gray-600 dark:text-white">
                  {item.name}
                </div>
                <p className="text-gray-500 dark:text-white">{item.Language}</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Open options</span>
                  <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
