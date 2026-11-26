# Roast the Smart Fridge: One Line, Best Laugh Wins

[![Competition](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9.svg)](https://make.fun/competitions/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![Rank](https://make.fun/badge/veneraxyz/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9-entry-v1/rank.svg)](https://make.fun/competitions/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![Reward](https://make.fun/badge/veneraxyz/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9-entry-v1/reward.svg)](https://make.fun/competitions/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)

Entry for [Roast the Smart Fridge: One Line, Best Laugh Wins](https://make.fun/competitions/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9) on make.fun.

## What it does

`main.ts` writes a single roast line (max 160 characters) about a smart fridge to `entry.txt` in the output directory. It validates the line (1–160 chars, non-blank, exactly one line, no control characters) before writing, then re-reads the file to verify the content matches.

## Run

```sh
npx tsx main.ts
```

The output directory is taken from `MAKEFUN_OUTPUT_DIR`, falling back to `/output`.
