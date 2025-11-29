export const curriculum = {
  phases: [
    { name: "Python Crash Course", days: [1, 2, 3], color: "from-purple-500 to-pink-500" },
    { name: "Core Data Structures", days: [4, 5, 6, 7, 8, 9, 10, 11], color: "from-blue-500 to-cyan-500" },
    { name: "Advanced Patterns", days: [12, 13, 14, 15, 16, 17, 18, 19, 20], color: "from-green-500 to-emerald-500" },
    { name: "Trees & Graphs", days: [21, 22, 23, 24, 25], color: "from-orange-500 to-red-500" },
    { name: "Advanced Algorithms", days: [26, 27, 28, 29, 30], color: "from-indigo-500 to-purple-500" }
  ]
};

export const dayContent = {
  1: {
    title: "Python Fundamentals",
    topics: [
      "Python syntax vs JavaScript",
      "Variables & dynamic typing",
      "Control flow (if/else)",
      "Loops",
      "List slicing",
      "List comprehensions"
    ],
    problems: [
      "412. Fizz Buzz",
      "1480. Running Sum of 1D Array",
      "1108. Defanging an IP Address",
      "1672. Richest Customer Wealth",
      "1342. Reduce to Zero"
    ]
  },

  2: {
    title: "Python Data Structures",
    topics: [
      "List operations",
      "Dictionaries",
      "Sets",
      "Tuples",
      "Functions & returns",
      "Memory model basics"
    ],
    problems: [
      "1. Two Sum",
      "217. Contains Duplicate",
      "136. Single Number",
      "349. Intersection of Two Arrays",
      "387. First Unique Character"
    ]
  },

  3: {
    title: "Python Tools & Techniques",
    topics: [
      "enumerate(), zip()",
      "Sorting",
      "Lambda functions",
      "Collections module",
      "Time complexity",
      "Unpacking"
    ],
    problems: [
      "242. Valid Anagram",
      "49. Group Anagrams",
      "347. Top K Frequent",
      "75. Sort Colors",
      "451. Sort Characters by Frequency"
    ]
  },

  4: {
    title: "Arrays I - Traversal & Basics",
    topics: ["Iteration", "Prefix sums", "Array transformations"],
    problems: ["88. Merge Sorted Array", "27. Remove Element", "169. Majority Element"]
  },

  5: {
    title: "Arrays II - Kadane's Algorithm",
    topics: ["Kadane’s algorithm", "In-place operations"],
    problems: ["53. Maximum Subarray", "121. Best Time to Buy Stock", "122. Best Time II"]
  },

  6: {
    title: "Strings I - Basics",
    topics: ["String traversal", "Character frequency", "Reversing & parsing"],
    problems: ["58. Length of Last Word", "151. Reverse Words", "13. Roman to Integer"]
  },

  7: {
    title: "Strings II - Patterns",
    topics: ["Sliding window on strings", "Palindrome logic"],
    problems: ["125. Valid Palindrome", "28. Find First Occurrence", "383. Ransom Note"]
  },

  8: {
    title: "Hash Map I - Frequencies",
    topics: ["Dictionaries", "Counting frequency"],
    problems: ["242. Valid Anagram", "1. Two Sum", "205. Isomorphic Strings"]
  },

  9: {
    title: "Hash Map II - Advanced",
    topics: ["Grouping elements", "Bidirectional maps", "Grid validation"],
    problems: ["49. Group Anagrams", "219. Contains Duplicate II", "36. Valid Sudoku"]
  },

  10: {
    title: "Two Pointers I - Basics",
    topics: ["Left/right pointers", "Pointer convergence"],
    problems: ["125. Valid Palindrome", "167. Two Sum II", "392. Is Subsequence"]
  },

  11: {
    title: "Two Pointers II - Advanced",
    topics: ["Sorted arrays", "Duplicate removal", "Swapping pointers"],
    problems: ["26. Remove Duplicates", "283. Move Zeroes", "345. Reverse Vowels"]
  },

  12: {
    title: "Sliding Window I - Fixed Window",
    topics: ["Fixed window patterns", "Window sum analysis"],
    problems: ["643. Max Average Subarray", "209. Min Size Subarray", "1456. Max Vowels"]
  },

  13: {
    title: "Sliding Window II - Variable Window",
    topics: ["Expand-shrink logic", "Character counting"],
    problems: ["3. Longest Substring", "76. Minimum Window", "567. Permutation in String"]
  },

  14: {
    title: "Stack I - Basics",
    topics: ["Stack operations", "Parsing", "Matching brackets"],
    problems: ["20. Valid Parentheses", "155. Min Stack", "71. Simplify Path"]
  },

  15: {
    title: "Stack II - Monotonic Stack",
    topics: ["Increasing/decreasing stacks", "Range processing"],
    problems: ["739. Daily Temperatures", "853. Car Fleet", "42. Trapping Rain Water"]
  },

  16: {
    title: "Queue & Deque",
    topics: ["Queue operations", "BFS queues", "Monotonic queues"],
    problems: ["225. Stack Using Queues", "239. Sliding Window Maximum", "933. Recent Calls"]
  },

  17: {
    title: "Linked List I - Basics",
    topics: ["Nodes", "Traversal", "Fast/slow pointers"],
    problems: ["141. Linked List Cycle", "21. Merge Lists", "203. Remove Elements"]
  },

  18: {
    title: "Linked List II - Manipulation",
    topics: ["Mid finding", "Reversal", "Cycle detection"],
    problems: ["876. Middle of List", "206. Reverse List", "142. Cycle II"]
  },

  19: {
    title: "Binary Search I",
    topics: ["Classic binary search", "Boundary logic"],
    problems: ["704. Binary Search", "35. Search Insert", "69. Sqrt(x)"]
  },

  20: {
    title: "Binary Search II",
    topics: ["Rotated arrays", "Condition-based search"],
    problems: ["33. Rotated Array Search", "153. Find Minimum", "162. Find Peak"]
  },

  21: {
    title: "Trees I",
    topics: ["Tree traversals", "DFS", "BFS"],
    problems: ["104. Max Depth", "100. Same Tree", "110. Balanced Tree"]
  },

  22: {
    title: "Trees II",
    topics: ["Recursion", "Subtree checks", "Root-to-leaf paths"],
    problems: ["226. Invert Tree", "112. Path Sum", "101. Symmetric Tree"]
  },

  23: {
    title: "Trees III",
    topics: ["Level order BFS", "Queue patterns"],
    problems: ["102. Level Order", "199. Right Side View", "107. Level Order II"]
  },

  24: {
    title: "Graphs I",
    topics: ["Adjacency list", "DFS", "BFS", "Flood fill"],
    problems: ["200. Number of Islands", "733. Flood Fill", "130. Surrounded Regions"]
  },

  25: {
    title: "Graphs II",
    topics: ["Cloning graphs", "Connected components", "Multi-source BFS"],
    problems: ["133. Clone Graph", "417. Pacific Atlantic", "695. Max Area Island"]
  },

  26: {
    title: "Heaps & Priority Queues",
    topics: ["heapq", "Min-heap", "Priority selection"],
    problems: ["215. Kth Largest", "347. Top K Frequent", "973. K Closest Points"]
  },

  27: {
    title: "Greedy I",
    topics: ["Greedy choice", "Local/global optimum"],
    problems: ["55. Jump Game", "45. Jump Game II", "134. Gas Station"]
  },

  28: {
    title: "Greedy II",
    topics: ["Intervals", "Activity selection"],
    problems: ["56. Merge Intervals", "57. Insert Interval", "435. Non-overlapping Intervals"]
  },

  29: {
    title: "Dynamic Programming I",
    topics: ["Recurrence", "Memoization", "1D DP"],
    problems: ["70. Climbing Stairs", "198. House Robber", "322. Coin Change"]
  },

  30: {
    title: "Dynamic Programming II",
    topics: ["2D DP", "Grid DP", "Subsequence DP"],
    problems: ["62. Unique Paths", "64. Minimum Path Sum", "1143. Longest Common Subsequence"]
  }
};
