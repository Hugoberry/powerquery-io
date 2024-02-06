---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


एक प्रकार के वर्ण से दूसरे प्रकार के वर्ण में अवस्थांतर के अनुसार, पाठ को पाठ की सूची में विभाजित करने वाले फ़ंक्शन को लौटाता है. \{0} और \{1} पैरामीटर या तो वर्णों की सूची हो सकते हैं या एक ऐसा फ़ंक्शन जो किसी वर्ण को लेता है और true/false लौटाता है.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Remarks

एक प्रकार के वर्ण से दूसरे प्रकार के वर्ण में अवस्थांतर के अनुसार, पाठ को पाठ की सूची में विभाजित करने वाले फ़ंक्शन को लौटाता है. <code>before</code> और <code>after</code> पैरामीटर या तो वर्णों की सूची हो सकते हैं या एक ऐसा फ़ंक्शन जो किसी वर्ण को लेता है और true/false लौटाता है.


## Examples

### Example #1 
जब भी किसी अपर या लोअरकेस अक्षर के बाद कोई अंक हो, तो इनपुट को विभाजित करें.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
