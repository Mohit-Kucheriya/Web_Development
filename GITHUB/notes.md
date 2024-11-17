1. git - version control system i.e. software

2. github - service provider

3. Repository - a collection of files and folders that are stored in a remote server

4. git commands -
   a. git --version - shows the version of git.

   b. git init - initializes a git repository (one time per project). What does git init do? -> It create a hidden folder named .git in the root directory of the project.

   c. git status - shows the status of the repository.

   d. git add - adds a file or folder to the staging area.

   e. git commit - commits the changes to the Local Repository and writes a commit message, which is a short description of the changes made.

   f. git log - shows the commit history of the repository.

   g. git log --oneline - shows the commit history of the repository in a one-line format.

   h. git config --global user.name "Your Name" - sets the name of the user.

   i. git config --global user.email "Your Email" - sets the email of the user.

   j. .gitignore - a file that specifies intentionally untracked files that git should ignore. The file name environments variable and this file holds the sensitive information like passwords, API keys, etc.

   k. cat .gitconfig - shows the details of the git configuration.

   l. git branch - shows the branches of the repository.

5. How to create a branch, switch to a branch, and delete a branch?

   a. git branch <branch-name> - creates a new branch.

   b. git checkout <branch-name> - switches to the specified branch.

   c. git branch -d <branch-name> - deletes the specified branch.

   d. git switch <branch-name> - switches to the specified branch.

6. Shortcuts -

   a. git add . - adds all changes to the staging area.

   b. git checkout -b <branch-name> - creates a new branch and switches to it.

7. What is git conflict?
   Answer - git conflict occurs when the same file is modified in two different branches. The file is modified in both the branches, and git cannot decide which change to keep. To resolve the conflict, you need to manually edit the file to remove the conflict.
