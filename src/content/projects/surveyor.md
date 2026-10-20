---
title: Surveyor
summary: A Python and FastAPI platform that checks survey questionnaires against 25 psychometric validation principles before any data is collected.
category: systems
tools: [Python, FastAPI, NLP]
date: 2026-09-01
featured: true
---

_Backend AI Engineering Internship at FlyRank.AI, July to September 2026._

## The problem

A badly worded survey question produces bad data, and nobody notices until the analysis is done. Surveyor catches those problems before data collection starts.

## How it works

The analysis runs as a staged pipeline:

1. **Parsing**: reads the questionnaire into individual questions
2. **Rule engine**: checks each question against 25 psychometric validation principles
3. **Scoring**: rates measurement quality risks
4. **Reporting**: every flag comes with a plain explanation and a confidence score

Rule-based NLP checks detect **leading, ambiguous and double-barreled questions**.

## Result

Survey designers can fix measurement problems up front, which raises the quality of the data feeding downstream analytics.
