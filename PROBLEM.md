# PROBLEM STATEMENT

[Dating Recommendation](#Dating-Recommendation)

- [Context](#Context)
- [Example](#Example)
- [Explanation](#Explanation)
- [Implicit Requirements](#Implicit-Requirements)
- [How to share your solution with us?](#How-to-share-your-solution-with-us)

## Dating Recommendation

### Context

[**(Top)**](#top)

In recent times, some niche online dating apps have seen massive success. At the heart of
these apps is the algorithm to recommend best match profiles. In order to ensure that users
do not end up browsing large amount of irrelevant results, the algorithm must return the
results based on ranking the matches using weightage of individual matching requirements.
Problem Statement
Write code for a dating recommendation engine which would find the closest match for any
user. Each registered user is expected to have provided:

- Name
- Gender
- Age
- Interests

Recommendation engine applies following rules in given order while identifying the closest matches:

- Gender Rule: Opposite gender is given a preference.
- Age rule: Closest match in terms of age is given a preference.
- Interest rule: Closest match in terms of interests is given a preference.

### Example

[**(Top)**](#top)

Let us say the system has following registered users:

| Name  | Gender | Age | Interest                             |
| ----- | ------ | --- | ------------------------------------ |
| UserA | Female | 25  | Cricket                              |
| UserB | Male   | 27  | Cricket, Football, Movies            |
| UserC | Male   | 26  | Movies, Tennis, Football, Cricket    |
| UserD | Female | 24  | Tennis, Football, Badminton          |
| UserE | Female | 32  | Cricket, Football, Movies, Badminton |

If system is asked to fetch top 2 matches of UserB, the output should be the following list having matches ordered by their closeness with UserB:
_Output_: [UserA, UserD]

### Explanation

[**(Top)**](#top)

- Though UserE and UserB has maximum number of interests matching, age is given
  preference over interests.
- Similarly, UserB is closest to UserC in terms of age and all their interests match, but
  gender is given preference over age & interests.
- Interest match counts of UserA and UserD with UserB are identical. However, UserA
  is closer to UserB in terms of age when compared to UserD. Therefore, UserA is given
  more preference.

### Implicit Requirements

[**(Top)**](#top)

1. Solution must have a robust design.
2. Solution must be extensible i.e. we may need to add a new requirement later.
3. Unit tests should be present.

### How to share your solution with us?

[**(Top)**](#top)

1. Create a public github repository.
2. Commit your code there with a README file describing how to run the application.
3. Share the repository url with us.

## SOLUTION

[README](./README.md)
