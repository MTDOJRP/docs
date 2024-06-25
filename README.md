# 📚 KCRP
## Welcome to the KCDOJRP Documentation!

#### 🔗 These docs can be found at <a href="https://docs.kcdojrp.com" target="_blank">doc.kcdojrp.com</a>
#### 🖋️ Anyone is able to edit and add to our documentation!
#### 🖥️ If you are looking for our <a href="https://cad.kcdojrp.com" target="_blank">CAD</a>, go to <a href="https://cad.kcdojrp.com" target="_blank">cad.kcdojrp.com</a>

### ✍️ If you want to contribute to our docs and add more information or maybe just fix a typo, here is a useful guide to get started:
- If you don't already have one, You will need to create a Github account. You can sign up [Here](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E&source=header-repo&source_repo=MTDOJRP%2Fdocs)

1. Click [**Fork**](https://github.com/MTDOJRP/docs/fork), Than **Create Fork** to get started!

2. Now on this fork you can now modify the pages as you please, You can add new information, fix issues, and more!
However this will not update on the website just yet!

3. To make your changes on the website come back to the [**original repo**](https://github.com/MTDOJRP/docs)

4. Click "[**Pull Requests**](https://github.com/MTDOJRP/docs/pulls)" and Create **New Pull Request**

5. Add a comment of what you did. For example; "Fixed There instead of Their" or 'Added new information to LEO page"

6. Our team will review your changed and approve or deny them, If they are denied our team will leave a comment of why.


### ➕ But wait? I've created the fork, How do I edit??
In order to edit the docs and add what you'd like to them make sure you create a fork as showed above, than go into the docs folder and find the file you want to edit, Or create a folder/file.

All Folders must contain a `_category_.json` file
The file will look like so:
```json
{
 "label": "Fire/Ems",
 "position": 3,
 "link": {
   "type": "generated-index",
   "description": "All the information to join SAFD!"
 }
}
```
The Label is what you want to name the category.
The position is where on the left sidebar the category will be displayed.
And the description is a brief description to display when someone clicks on the category.

Now, How do I create a new file/page?
Create a file named your topic.md, Example: 10codes.md
Now at the top of the file add the following:
```md
---
sidebar_position: 2
---
```
This marks where in the sidebar under the category you want this page to display, Simply change the number.
Now write what information you would like in the file!

#### 📜 But what about the fancy formatting, images, and links?
All of these files are created using a language called "Markdown"
See a full list of markdown formatting [here](https://www.markdownguide.org/basic-syntax/)!

## 🛠️ Example Markdown Snippet
Here is an example of a markdown snippet to help you get started:
```md
# Welcome to KCDOJRP Documentation

## How to Contribute

1. **Fork the Repository**: Click the 'Fork' button on the top right of the [original repo](https://github.com/MTDOJRP/docs).
2. **Make Changes**: Edit the docs in your fork.
3. **Submit a Pull Request**: Once done, create a pull request to merge your changes.

### Formatting Tips
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Link**: `[Link text](URL)`
```


### I see an issue with the docs but don't know how or can't edit them, Or do you just have a Suggestion?
Feel free to head on over to the [**Issues**](https://github.com/MTDOJRP/docs/issues) tab and click **New Issue**
Here you can create an issue, Type what you need / want fixed/added and add Labels to help us categorize your issue!
These are the labels you can use:
- **Added Documentation** - a suggestion for us to add a topic or details to the documentation, Notice something is missing and want it added? Use this!
- **Bug/Typo** - Oops did we mess something up on our side? Let us know and create a issue with the Bug/Typo label!
- **New Page** - Got something brand new for us that isnt at all in the documentation? Use this label!
- **Question** - Got a question about the documentation or on how to contribute, You can use this or open a ticket on our [**Discord**](https://discord.gg/fuwumRAapE)!

### ❓ Any More Questions?
Join our [**Discord**](https://discord.gg/fuwumRAapE) and open a [**Ticket**](https://discord.gg/WBTGjmPnB5)!
