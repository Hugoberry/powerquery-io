---
title: Text.Combine
---

# Text.Combine


पाठ मानों की सूची को एक पाठ मान में श्रृंखलाबद्ध करता है.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

टेक्स्ट मानों, `texts`, की सूची को एकल टेक्स्ट मान में संयोजित करने के परिणाम को लौटाता है. `texts` में मौजूद किसी भी `null` मान की उपेक्षा की जाती है. अंतिम संयुक्त टेक्स्ट में उपयोग किए गए वैकल्पिक `separator` को निर्दिष्ट किया जा सकता है.


## Examples

### Example #1
पाठ मान "Seattle" और "WA" को संयोजित करें.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
कॉमा और रिक्ति से विभाजित टेक्स्ट मान "Seattle" और "WA" को संयोजित करें.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
अल्पविराम और रिक्ति से विभाजित मानों "Seattle", `null` और "WA" को संयोजित करें. (ध्यान दें कि `null` की उपेक्षा की गई है.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
प्रथम नाम, मध्य आरंभिक (यदि मौजूद हो) और अंतिम नाम को व्यक्ति के पूरे नाम में संयोजित करें.
```powerquery
let
    Source = Table.FromRecords({
        [First Name = "Doug", Middle Initial = "J", Last Name = "Elis"],
        [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew"],
        [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova"]
    }),
    FullName = Table.AddColumn(Source, "Full Name", each Text.Combine({[First Name], [Middle Initial], [Last Name]}, " "))
in
    FullName
```

Result: 
```powerquery
Table.FromRecords({
    [First Name = "Doug", Middle Initial = "J", Last Name = "Elis", Full Name = "Doug J Elis"],
    [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew", Full Name = "Anna M Jorayew"],
    [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova", Full Name = "Rada Mihaylova"]
})
```




## Category
Text.Transformations
