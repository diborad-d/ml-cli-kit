import { featurizeText } from "../bin/featurize.js";
import { describe, it, expect, test } from "@jest/globals";

describe("featurizeText", () => {
  it("should extract features from a simple sentence", () => {
    const input = "The quick brown fox";
    const features = featurizeText(input);
    expect(features).toBeDefined();
    // Add more specific assertions based on your implementation
  });

  it("should handle empty input", () => {
    const features = featurizeText("");
    expect(features).toEqual([]);
  });

  test("should return an object with action, object, and count", () => {
    const input = "User clicked the ad 3 times";
    const result = featurizeText(input);
    expect(result).toEqual({
      action: "clicked",
      object: "ad",
      count: 3,
    });
  });

  test("should return null for missing count", () => {
    const input = "User viewed the product";
    const result = featurizeText(input);
    expect(result).toEqual({
      action: "viewed",
      object: "product",
      count: null,
    });
  });

  test("should return null for missing object", () => {
    const input = "User clicked 5 times";
    const result = featurizeText(input);
    expect(result).toEqual({
      action: "clicked",
      object: null,
      count: 5,
    });
  });
});
test("should return null for unrecognized input", () => {
  const input = "This is an unrecognized sentence";
  const result = featurizeText(input);
  expect(result).toEqual({
    action: null,
    object: null,
    count: null,
  });
});
