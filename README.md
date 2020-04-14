
# git-playground

## Setup

Run:
```
npm i
```

## Change the code

- Make some changes, add file...
- Add files to git
- Run 'git commit' in terminal (IDE is not supported, this is cli)
- Follow instructions in the terminal and write the commit message (follow our convention[https://app.gitbook.com/@studocu/s/studocu/tech-operations/git-and-github/commit-messages])

## Create a new release and generate/update CHANGELOG.md

Run:
```
npm run release -- --no-verify --release-as={nextVersion}

// nextVersion - major|minor|patch or semantic version (1.0.0, 1.0.1...)
// --no-verify is important so it skips our prepare-commit-msg hook when makes release commit
```
