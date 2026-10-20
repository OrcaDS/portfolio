---
title: Beat the Bot
summary: An adaptive prediction game that learns how players choose, tested on 360,000 simulated decisions and run live with 41 participants.
category: data-science
tools: [Python, SQLite, Logistic regression, Simulation]
date: 2026-10-01
featured: true
---

## The idea

Beat the Bot is a game where players try to beat a bot that predicts their next choice and adapts to their behavior as they play.

## How it works

The bot blends three signals in an equal-weight ensemble:

- **Population patterns**: what players choose in general
- **Personal preferences**: what this player tends to pick
- **Repeat/switch behavior**: whether this player sticks with a choice or changes it after each round

Player statistics are updated in SQLite after every round, so predictions adapt as the game goes on.

## Testing

- Simulated **360,000 decisions from 10,000 players**
- Compared against multiclass logistic regression baselines


## Running it live

The game ran live at a booth: **41 participants, 436 decisions and 51 completed games**. A diagnostic dashboard tracked choice distributions, accuracy trends and outcomes, with PDF reports.
