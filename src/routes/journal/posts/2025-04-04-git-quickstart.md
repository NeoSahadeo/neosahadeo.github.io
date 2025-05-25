---
published: false
date: 2025-04-12
title: Git Quickstart
tags:
  - crash course
---
This is a crash course on how to use Git. It will cover the main features of Git which are commits, tags, comments, branches, remotes, and Git configs. For more info read the [Git Book](https://git-scm.com/book/en/v2) (it's free).

# What is Git?

Git is a version control system (VCS) that is used to help maintain and keep track of projects. It works best with small to medium repositories but starts facing issues when scaling up to larger repositories.

## Very Brief History

It was created by Linus Torvalds in 2005. It was developed after the existing solution for version control - Bitkeeper - moved away from a free model requiring a license to use the software.

# Commands

For this section, I will provide the command and a super quick explanation; as well as some errors that you might encounter with it. All of the commands should be prefixed with `git`

| Command | Explanation | Use |
| --- | --- | --- |
| init | Initialise a git repository in the current folder (default branch: master) | git init |
| add | Add an item to the staging area and also track the item | git add README.md |
| commit | Commit all staged items | git commit -m "first commit" |
| push | Upload all commits to a repository | git push origin main |
| pull | Fetch and merge changes for a repository | git pull origin main |
| checkout | Switch branches | git checkout tests |
| branch | Perform various branch commands | git branch -M main |
| remote | Configure the external repository options | git remote remove origin |