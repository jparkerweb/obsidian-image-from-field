// -------------------------------
// -- obsidian-image-from-field --
// -------------------------------
// display an image using the
// source value from any field
// 
// GitHub: https://github.com/jparkerweb/obsidian-image-from-field

// -------------------------------
// ----------- usage -------------
// ---------------------------------------------------------------------------------------------
// `$= await dv.view("scripts/obsidian-image-from-field", ["<size>", "<alignment>", "<field>"])`
// size ⇢ number (eg: 250, 300, 825, etc.)
// alignment ⇢ left, center, right
// field ⇢ name of field that holds the image source url (can be inline or frontmatter field)
// ---------------------------------------------------------------------------------------------

if (dv.current().file) {
    const size = input[0]
    const alignment = `oiff--${input[1]}`
    const field = input[2]
    const source = eval(`dv.current().${field}`)
    const image = `![|${size}](${source})`
    dv.el("div", image, { cls:alignment })
}
