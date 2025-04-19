# 📚 Kelly County | Documentation

Welcome to the Kelly County Roleplay Documentation! This is a place where you can find all the information you need to get started with Kelly County Roleplay.

- 🔗 **These docs can be found at <a href="https://docs.kellycountyrp.com/" target="_blank">docs.kellycountyrp.com</a>**
- 🖋️ **Anyone is able to edit and add to our documentation!**
- 🖥️ **If you are looking for our <a href="https://cad.kcdojrp.com" target="_blank">CAD</a>, go to <a href="https://cad.kcdojrp.com" target="_blank">cad.kcdojrp.com</a>**

<br/>

---

<br/>

### Contributing to the Docs

If you want to contribute to our docs and add more information or maybe just fix a typo, here is a useful guide to get started.

1. If you don't already have one, You will need to create a Github account.<br/>
   *You can sign up for an account [Here](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E&source=header-repo&source_repo=MTDOJRP%2Fdocs)*

2. Create a fork of the repository, this will allow you to make changes to the files without affecting the original repository.<br/>
   *You can do this by clicking the ["Fork" button](https://github.com/MTDOJRP/docs/fork) in the top right corner of the repository page. Then, click "Create Fork"*

3. You can now clone your fork onto your PC, and proceed to edit whatever it is that you want to modify (you can also just make your changes in the repository itself on the Github website).<br/>
   *Find out how to do that [Here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)*

4. Click "[**Pull Requests**](https://github.com/MTDOJRP/docs/pulls)" and Create **New Pull Request**.

5. Add a comment of what you did. For example; "Fixed There instead of Their" or "Added new information to LEO page".<br/>
   *Try to keep it descriptive to make it easy for us to understand what you did and why you did it.*

6. Our team will review your changed and approve or deny them. If they are denied our team will leave a comment of why.

<br/>

---

<br/>

### But wait? I've created the fork, how do I edit?

In order to edit the docs and add what you'd like to them make sure you create a fork as showed above, than go into the docs folder and find the file you want to edit, or create a new folder/file if the documentation doesn't already exist.

<br/>

#### 📕 Creating a new section

Creating a new section will require you to create a new folder within `/docs/`.

 - Try to keep the formatting consistent, the name should start with `[number]-` (replace the '[number]' with the correct number which defines where the section should be).<br/><br/>
  *For example, creating a folder named `3-your-vehicles` results in the section being located on the 3rd position in the sidebar.*

- Once you make the folder, make sure to update all other folders. For example, if you add a folder in position 9 (`9-`), there may already be a section, in this case `9-fire-ems`. You will need to rename that to "10-", then check if something already ists on "10-", and so on. This is to preserve a flow and order to the documentation.

- All Folders must contain a `_category_.json` file. It should look like this.<br/><br/>
  *The file is mostly self-explanatory. But here's a breakdown of the sections:*<br/>
  *1. **Label**: Defines what the name of the category should be on the sidebar.*<br/>
  *2. **Position**: This should be the same as the `[number]-` section of the folder name.*<br/>
  *3. **link.type**: Should most of the time just be "generated-index".*<br/>
  *4. **link.description**: A description for the documentation section.*

```json
{
  "label": "Fire & EMS",
  "position": 9,
  "link": {
    "type": "generated-index",
    "description": "Find out how to be a Firefighter or EMT."
  }
}
```

<br/>

#### 📝 Creating a new file/page

How do I create a new file/page? Luckily, this is nowhere near as complicated as making a new section.

- Create a file named your `[number]-topic.md` (for example: `3-ten-codes.md`) in the folder you want to create the page in. Like before, replace the `[number]` with the correct number to order the page in the sidebar.

- Now, at the top of the file add your "topic" name, for example: `# 10 Codes`. This is what will be displayed in the sidebar as the name of the topic.

- Now write what information you would like in the file!

<br/>

#### 📜 But what about the fancy formatting, images, and links?

All of these files are created using a language called "Markdown".
- You can see a full list of markdown formatting [here](https://www.markdownguide.org/basic-syntax/)!
- Check out the [docusaurus markdown guides](https://docusaurus.io/docs/markdown-features) for more information as well!

<br/>

#### 🛠️ Example Markdown Snippet
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

<br/>

---

<br/>

### See an issue with the docs but don't know how or can't edit them? Or, do you just have a suggestion?
Feel free to head on over to the [**Issues**](https://github.com/MTDOJRP/docs/issues) tab and click **New Issue**
Here you can create an issue, Type what you need / want fixed/added and add Labels to help us categorize your issue!
These are the labels you can use:
- **Added Documentation** - a suggestion for us to add a topic or details to the documentation, Notice something is missing and want it added? Use this!
- **Bug/Typo** - Oops did we mess something up on our side? Let us know and create a issue with the Bug/Typo label!
- **New Page** - Got something brand new for us that isnt at all in the documentation? Use this label!
- **Question** - Got a question about the documentation or on how to contribute, You can use this or open a ticket on our [**Discord**](https://discord.gg/fuwumRAapE)!

<br/>

### ❓ Any More Questions?
Join our [**Discord**](https://discord.gg/kcdojrp) and open a ticket in [**#support-and-information**](https://discord.com/channels/1132847710282727565/1134209356708196392)!
