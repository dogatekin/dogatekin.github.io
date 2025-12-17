---
title: Solvimus Grey Spectrum Critique
---

<svelte:head>
	<title>Doga Tekin on Solvimus</title>
    <base target="_blank">
</svelte:head>

# {title}


## Previously in Solvimus

Earlier levels of this chapter (Beam Bafflement) teach the player about laser beams and how to redirect and merge them to obtain different colors of lasers to activate different colors of targets.

## The Puzzle

This level starts with the players separated, each in their small room. This acts as a tutorial room showing players they can pass lasers to each other's rooms through a mirror and a portal so they can be redirected to targets on the other side.

In the real puzzle room, the players are still separated but they are both in much bigger rooms. The rooms each have 3 laser sources and 10 targets. The color scheme changes to grayscale so the colors of lasers and targets are not clear to the players. Each laser source and target is marked with a letter floating above it.

Each player also has 3 side rooms, one contains 5 buttons, one contains blackboards about simple equations and Roman numerals, one contains squares on the ground along with some buttons and objects.

## The Solution

The puzzle is solved mostly by getting pieces of information from each side room that guide the players in redirecting the lasers to the correct targets.

The first side room: if both players hit their buttons in the same order together (first both players hit button 1, then both hit button 2, so on), a QR code appears. It links to Rick Astley's Never Gonna Give You Up on YouTube. This is a clue to take the laser marked N and redirect it to pass through the targets G, G, Y, and U, forming the initials of the song's title.

The second side room: using the equations on both player's blackboards together (either the very easy version or the very very easy version) they can reach two values for X, 5 and 50. The Roman numerals blackboard shows 5 = V and 50 = L. This is a clue to take the laser marked X and redirect it to pass through the targets V and L.

The third side room: the players need to organize the objects onto the squares correctly to progress. For squares with pictures, this is achieved by finding the objects shown in the pictures. For others, it's about matching them with objects based on colors (e.g., black-and-white objects go on the black-and-white checkered square). This gives the players the letter sequences AGW and BQC, clues for pointing laser A through targets G and W and laser B through targets Q and C.

The final piece of the solution does not come from the side rooms. When using the feature to see the other person's point-of-view in this level, each player can see a dashed blue guideline in the other person's perspective that the other person can't see. Using this, the players can guide each other to redirect laser M through the targets shown by the guideline.

When all of this is in place, the death-grid blocking the exit deactivates and the players can finish the level.

## The Frustration

### The Rickroll is not a troll

Getting Rickrolled is a near-universal experience which involves clicking a link with the expectation of reaching something important to you (a trailer for an anticipated game, some crazy news story, etc.) but instead being met with Rick Astley, getting disappointed, and moving on. If it appears in a game, it appears as an easter egg or a joke.

Solvimus gives you a puzzle leading to a QR code, setting up expectations of reaching something important (a solution) but hitting you with the Rickroll instead. Players, having been through this experience many times, can naturally conclude this was a troll and move on as they always do when they get Rickrolled. 

However, the game breaks this "contract" by expecting you to not move on, instead wanting you to consider this as a critical part of the puzzle instead of a troll, and engage with the song deeply enough to match the initials of its title to letters in the puzzle.

Moreover, the experience of getting trolled like this in the first side room (since they don't know it's not a troll) makes the player immediately question the importance of all other side rooms: what if they are all trolls or distractions too?

### Subverting expectations (derogatory)

The chapter up to this point is about using your redirection cubes intelligently to combine lasers and match the correct colors of lasers with the correct colors of targets. When the color scheme changes to grayscale, this sets up the expectation of a puzzle where the players will need to figure out the colors in some other way, figure out which targets need which lasers, and redirect them accordingly.

However, this level is not about laser colors or redirection cubes at all. The puzzles to solve in the side rooms are entirely independent of lasers, the lasers are just used as a means to "input" the solution coming from the other puzzles. In this level, they are mechanically equivalent to a keypad where you can enter your solutions like "NGGYU" or "AGW" as you learn those strings of characters. Players expecting to engage with the core mechanics of the chapter might be frustrated experimenting with lasers and colors only to find they were not relevant.

The part of the solution involving looking at the other person's perspective and seeing something they can't see is also unexpected, because it never happens before this point in the game and is never hinted at in any way. We first thought we were seeing a graphical glitch with laser rendering. It would be much easier to take this as a part of the solution if this mechanic was established earlier in the game.

Similarly, the mechanics of the third side room where objects need to be organized onto squares is entirely new. Never before has putting an object somewhere in a square triggered anything in the game. In a level by itself, this is an entirely self-discoverable mechanic, but being introduced in this huge level with so many things to interact with, combined with the seeds of doubt about the importance of the side rooms due to the Rickroll, make this solution very missable.

## No intermediate feedback

Another factor exacerbating the problems above is the lack of intermediate feedback for any of the 4 sub-puzzles. If the players solve one or two of them, e.g., the math one and the one in the other person's perspective, nothing happens. No green lights turn on, no voice lines start. All of the puzzles need to be solved perfectly at the same time to get feedback.

Because there are so many things to interact with, and because the players might already be doubting the importance of the side rooms, this lack of feedback can make them lose confidence in their solutions and start trying other things.

Some feedback could go a long way here. One example of how it could be given: each side room could have a light that is initially turned off but would turn on when the lasers hinted by that room is solved. This would both reinforce the idea that each side room is important and has something to solve, give players confidence they are on the right track as they make progress, and reduce the possible action space over time so players don't backtrack on their solutions ("the math room light is on, so I don't need to think about that one anymore").

## Conclusion

I actually quite like this game so far, so this critique is coming from a place of love! This level was the first one that really frustrated us, so I just wanted to analyze our experience a bit deeper and think about the design of the puzzles. I'm not a game designer at all, but my feeling is that this level is doing too many things at the same time, breaking too many expectations, introducing too many mechanics, and not giving enough feedback.