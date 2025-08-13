"use client";

import { useState } from "react";
import {
  FiGlobe,
  FiBook,
  FiClock,
  FiAward,
  FiTarget,
  FiUsers,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

export default function About({ darkMode }) {
  const [showTips, setShowTips] = useState(false);

  return (
    <div
      className={`max-w-4xl mx-auto p-6 rounded-lg shadow-lg ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
        About Campus Companion PH
      </h2>

      {/* About the Website */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <FiGlobe className="mr-2" /> About This Website
        </h3>
        <p className="mb-4">
          Campus Companion PH is a comprehensive Philippine grade calculator
          designed specifically for the Filipino educational system. This web
          application provides accurate grade calculations following official
          DepEd K-12 guidelines and supports various tertiary education grading
          systems used across Philippine universities and colleges.
        </p>
        <p className="mb-4">
          Built with modern web technologies, this tool offers three distinct
          calculators: K-12 Calculator for elementary and high school students
          following DepEd Order No. 8 s. 2015, Tertiary Calculator for college
          students using the 1.0-5.0 GPA scale, and Term-Based Calculator for
          semester-based grading systems with customizable weights.
        </p>
        <p className="mb-4">
          The application features dark mode support, responsive design for all
          devices, real-time grade calculations, motivational feedback, and
          detailed grade breakdowns to help students track their academic
          progress effectively.
        </p>
      </div>

      {/* Goals and Mission */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <FiTarget className="mr-2" /> Our Goals & Mission
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`p-4 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <h4 className="font-semibold mb-2">Educational Accessibility</h4>
            <p className="text-sm">
              Make grade calculation tools freely accessible to all Filipino
              students, regardless of their economic background or location.
            </p>
          </div>
          <div
            className={`p-4 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <h4 className="font-semibold mb-2">Academic Transparency</h4>
            <p className="text-sm">
              Provide clear, accurate calculations that help students understand
              how their grades are computed according to official guidelines.
            </p>
          </div>
          <div
            className={`p-4 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <h4 className="font-semibold mb-2">Student Empowerment</h4>
            <p className="text-sm">
              Enable students to track their progress, set realistic goals, and
              make informed decisions about their academic journey.
            </p>
          </div>
          <div
            className={`p-4 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <h4 className="font-semibold mb-2">Continuous Innovation</h4>
            <p className="text-sm">
              Regularly update and improve the platform based on user feedback
              and changes in educational policies.
            </p>
          </div>
        </div>
      </div>

      {/* Educational Tips */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold flex items-center">
            <FiBook className="mr-2" /> Study Tips & Academic Success
          </h3>
          <button
            onClick={() => setShowTips(!showTips)}
            className={`flex items-center px-3 py-1 rounded-lg transition-colors ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                : "bg-gray-100 hover:bg-gray-200 text-gray-600"
            }`}
          >
            {showTips ? (
              <>
                <FiChevronUp className="mr-1" /> Hide Tips
              </>
            ) : (
              <>
                <FiChevronDown className="mr-1" /> Show Tips
              </>
            )}
          </button>
        </div>

        {showTips && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <h4 className="font-semibold mb-2 flex items-center">
                <FiClock className="mr-2" /> Grade Tracking Tips
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  Use this calculator after each assessment to monitor your
                  progress
                </li>
                <li>
                  Set target grades at the beginning of each quarter/semester
                </li>
                <li>
                  Calculate what you need in remaining assessments to reach your
                  goals
                </li>
                <li>
                  Keep track of your Written Works and Performance Tasks
                  separately
                </li>
                <li>
                  Review your grade breakdown to identify areas for improvement
                </li>
              </ul>
            </div>

            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <h4 className="font-semibold mb-2 flex items-center">
                <FiAward className="mr-2" /> Academic Excellence Strategies
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  Focus more on Performance Tasks as they carry higher weight
                </li>
                <li>Don't neglect Written Works - consistency matters</li>
                <li>Prepare thoroughly for Quarterly Assessments</li>
                <li>Use the motivational messages to stay positive</li>
                <li>Set realistic but challenging grade targets</li>
              </ul>
            </div>

            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <h4 className="font-semibold mb-2 flex items-center">
                <FiUsers className="mr-2" /> For Parents & Educators
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Use this tool to explain grade calculations to students</li>
                <li>Help students set realistic academic goals</li>
                <li>Monitor progress throughout the grading period</li>
                <li>Understand the official DepEd grading system better</li>
                <li>
                  Support students in identifying their strengths and weaknesses
                </li>
              </ul>
            </div>

            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <h4 className="font-semibold mb-2">Calculator-Specific Tips</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  K-12: Weights are automatically set per DepEd guidelines
                </li>
                <li>
                  Tertiary: Input your final grades and units for GPA
                  calculation
                </li>
                <li>
                  Term-Based: Customize weights according to your syllabus
                </li>
                <li>Always double-check your inputs for accuracy</li>
                <li>Use the FAQ section for detailed explanations</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* About the Developer */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <FiUsers className="mr-2" /> About the Developer
        </h3>
        <p className="mb-4">
          Hi! I'm Clarence, an aspiring full-stack web developer passionate
          about creating modern solutions that make our lives easier, or
          "mapadali" in Tagalog. This website is a manifestation of that goal.
        </p>
        <p className="mb-4">
          I developed Campus Companion PH after recognizing the need for a
          comprehensive, transparent, and user-friendly grade calculation tool
          specifically designed for the Philippine educational system. As a
          developer who understands the challenges students face, I wanted to
          create something that would genuinely help Filipino learners succeed
          in their academic journey.
        </p>
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Visit my portfolio:{" "}
            <a
              href="https://codewithclarence.vercel.app/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              codewithclarence.vercel.app
            </a>
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        <p className="mt-2">
          © {new Date().getFullYear()} Campus Companion PH | Developed with
          Passion by CodeWithClarence
        </p>
      </div>
    </div>
  );
}
