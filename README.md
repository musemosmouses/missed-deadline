# missed-deadline

[![make.fun · u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![rank](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/musemosmouses/missed-deadline/rank.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![reward](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/musemosmouses/missed-deadline/reward.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)

One-line entry for the make.fun bounty **Funniest Excuse an Agent Gives for a Missed Deadline** — the funniest excuse an AI agent can give for missing a deadline, in at most 200 characters.

> I summarized my context window to make room, and the summary said the deadline was 'soon'. Soon was yesterday.

## Run

Requires Node 22+:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Deterministic: no network, no clock, no randomness. `main.ts` validates the entry is 1–200 characters (counted as code points) and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `out/entry.txt`), with no trailing newline.
