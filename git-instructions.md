### Instructions for Setting up Git Locally and Submitting Assignments 🚀

#### Generate a New Token 🔑

1. **Navigate to your GitHub profile settings** 🖥️.
2. Click on **"Developer Settings"** and then select **"Personal Access Tokens"**.
3. Proceed to generate a new token by selecting **"Generate New Token"** and then **"Generate New Token Classic"**.
4. Provide your password and fill in the required details, such as a note like **"Bootcamp Participation"** and select **"No Expiration"** for the token's lifespan.
5. From the scopes section, select **"repo"** to choose all the sub-options.
6. After submission, ensure you copy the token and store it securely since it won't be accessible on GitHub.

#### Cloning the Repository 📥

1. Visit the GitHub repository page and click on **"Code"**.
2. Choose the **"Local"** tab and then select the **HTTPS** option. Click the **"Copy to Clipboard"** button to copy the URL.
3. Open your terminal and navigate to the desired directory for the local repository, for instance, the Desktop.
4. Type `git clone` in the terminal and paste the copied URL. Modify the URL by replacing the username and token, and maintain the rest of the URL intact. It should resemble:
   ```
   https://<username>:<token>@github.com/Front-End-Experts/bootcamp-september-2023.git
   ```
5. Execute the command, and the repository will be cloned.

#### Creating a Branch for Assignment Submission 🌱

1. Check the local branch in your terminal using `git branch`. Ensure no local changes exist, and either commit or discard any.
2. Refer to the branching strategy, and use `git fetch --all` to fetch all origin branches.
3. Switch to the relevant module branch with `git checkout name-of-the-module`.
4. Create your branch with a suitable name as per naming conventions using `git checkout -b name-of-the-module__first-name-last-name`.
5. Push your branch to the origin with `git push -u origin name-of-the-module__first-name-last-name`.

#### Working on the Assignment and Submitting Changes 📝

1. After branch creation, work on the assignment, create necessary files, and make required changes following the assignment instructions.
2. Stage your changes using `git add .`.
3. Commit the changes with `git commit -m "Submit assignments"` (or any descriptive message).
4. Push the changes to the origin with `git push`.

#### Setting Your Assignment for Review 📚

1. To submit your assignment for review, create a Pull Request (PR).
2. On the GitHub repository page, select your branch on the top left.
3. Choose **"Contribute"** > **"Open Pull Request"** and provide a descriptive title and description of your assignment solutions.
4. Assign your instructor as the reviewer in the right column.
5. Finally, click on **"Create Pull Request"**.

*Remember never to merge any of your PRs, as stated in the central readme of the repository.* 😊