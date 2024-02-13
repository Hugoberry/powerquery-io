---
title: Text.Proper
---

# Text.Proper


प्रत्येक शब्द का पहला अक्षर कैपिटल करता है.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

पाठ मान <code>text</code> के प्रत्येक शब्द के केवल पहले अक्षर को कैपिटलाइज़ करने वाले परिणाम को लौटाता है. सभी अन्य अक्षर लोअरकेस में लौटाए जाते हैं. वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1 
साधारण वाक्य पर &lt;code&gt;Text.Proper&lt;/code&gt; का उपयोग करें.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
