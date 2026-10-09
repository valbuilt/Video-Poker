Refleksjon
Where I ended up

I'm submitting this knowing it isn't finished. The core structure is there: types, routing between three pages, a Zustand store, dealing and shuffling a real deck, and holding/drawing cards but hand evaluation, betting and payouts, localStorage persistence, and a proper accessibility pass didn't make it in before the deadline. Saying that plainly up front rather than glossing over it.

What I actually learned

This project is the first time I've had to hold this many moving pieces in my head at once.

I learned about the existence of JSDoc comments and those turned out to actually help me while building, not just something for the grading criteria having VS Code show a function's purpose on hover is more useful than I expected.
Git branching properly. I kept branches small and one feature each, merging as soon as something worked. I made real mistakes along the way too. For example branching off a feature branch instead of main at one point and learned to fix that and use things like amending a commit before pushing.I am much more confident with that workflow now than at the start.
Actually sitting down, reading a spec, and turning it into a plan of small pieces. Probably the thing I'm proudest of here, even over any single feature.

Where the time went

Honestly, way too much of it went into stuff like a missing parenthesis, one wrong bracket in the Zustand store, an import with the wrong file extension. Small, dumb things that took forever to actually spot on the screen.

I was also sick for a chunk of this, so there were days I just couldn't sit at the computer long enough to get anywhere. Not using that as an excuse, the deadline stayed the deadline either way, just naming it.

And Zustand and routing were both brand new to me. Learning a tool and trying to build something real with it at the same time is just slower than using stuff I already knew.

Approach, and why I stopped where I did

I went for a clean, readable structure over trying to cram everything in. I'd rather hand in something that stops partway but actually makes sense, than something where every feature is half-tangled into the next one. Planning the build order up front took real time on its own, but it's basically why any of this still makes sense to look at.

Also, I've gotten feedback before that I spend too much time on how things look and not enough on the code underneath. Tried to actually listen to that this time, so the styling pass only happened at the very end, once things worked.

What's missing
Hand evaluation (what poker hand the player actually has)
Betting and payouts based on that
localStorage persistence
A proper accessibility pass - though cards are real buttons and keyboard-usable, so that part's not totally untouched
Last thing

I'm frustrated I didn't get further, not gonna pretend otherwise. But there were good moments too, the deck actually shuffling for real, coins updating in two places at once without breaking. There's just a limit to how much new stuff I can actually absorb at once, and I'd rather hand in less that I actually understand than more that I don't.
