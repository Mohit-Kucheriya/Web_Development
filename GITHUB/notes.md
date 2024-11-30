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

   m. git commit -am "Commit Message" - used to add and commit at the same time.

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

8. git diff - shows the differences between the last commit and the current commit.

   a. git diff --staged - shows the differences between the last commit and the current commit, excluding untracked files.

9. git stash - A common scenario is that we are working on a feature and want to switch to another
   branch, but we forgot to commit our changes. In this case, we can use git stash to stash the changes away. This command will store the changes in a temporary area, so that we can switch to another branch and apply them later.

   a. It's like a shelf where you can store your changes. So if you want to get the changes back, you can just take them out of the shelf.

   b. git stash pop - pops the changes from the stash i.e. get the changes back.

   c git stash pop - stash is not just limited to your branch and stash can be move from one branch to another.

   d. git stash apply - Another command is git stash apply. This command will apply the changes from the stash to the current branch.
   Syntax - git stash apply <stash-name>

   e. git stash list - lists all the stashes.

10. Commonly used git commands -
    a. git checkout <hash> - switches to the specified commit. To check the hash of the commit, use git log.

    b. Now to retrieve back or to go back from where we left off, we use git checkout main.

    c. git reflog - reflects you back onto where you were previously. It just moves your head back to where you were.

11. git rebase -
    a. Its a command that lets you change the commit history of your branch.

    b. NOTE - If you are on the main branch or the master branch, this command is not meant to be used.

    c. This command is usually meant to be run from the side branch that we are.

12. Commands related to github -
    a. git remote -v - shows the remote repositories.

    b. git remote add origin <url> - adds a remote repository.

    c. git remote rename <old-name> <new-name> - renames a remote repository.

    d. git remote rm <name> - removes a remote repository.

    e. git push <remote> <branch> - pushes the changes to the remote repository. i.e. origin main.

    f. git push -u origin main -
    -u setup an upstream that allows you to run future commands without specifying the remote branch.

    g. git push -
    It pushes the code directly to github.

    f. git clone <url> - clones the repository.

    g. git fetch - 
    git fetch brings in remote changes, but it doesn’t change your local files until you decide to merge them.

    h. git pull - git fetch and git merge.
