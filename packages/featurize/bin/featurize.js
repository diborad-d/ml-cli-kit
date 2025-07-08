#!/usr/bin/env node

// console.log(`🔧 FEATURIZE TOOL
// Convert text into structured ML features

// > Example:
// $ featurize 'User clicked the ad 3 times'

// Output:
// {"action": "clicked", "object": "ad", "count": 3}
// `);

import process from "process";

export function featurizeText(input) {
  if (!input || input.trim() === "") return [];

  // Try to match patterns like: "User clicked the ad 3 times"
  const match = input.match(/User (\w+)(?: the (\w+))?(?: (\d+) times)?/i);

  if (match) {
    const action = match[1] || null;
    const object = match[2] || null;
    const count = match[3] ? Number(match[3]) : null;
    return {
      action,
      object,
      count,
    };
  }

  // Fallback: return undefined features for unrecognized input
  return {
    action: null,
    object: null,
    count: null,
  };
}

// CLI usage: only run if this script is the entry point
if (process.argv[1] && process.argv[1].endsWith("featurize.js")) {
  const input = process.argv.slice(2).join(" ");
  const features = featurizeText(input);
  console.log("Output object:", features);
  console.log(JSON.stringify(features, null, 2));
}

// For ESM compatibility (Node.js >= 14), also check import.meta.url:
// if (
//   typeof import.meta !== "undefined" &&
//   import.meta.url === `file://${process.argv[1]}`
// ) {
//   const input = process.argv.slice(2).join(" ");
//   const features = featurizeText(input);
//   console.log("Output object:", features);
//   console.log(JSON.stringify(features, null, 2));
// }
