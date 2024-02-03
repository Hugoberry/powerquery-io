---
title: List.Split
---

# List.Split


## Description

यह निर्दिष्ट सूची को निर्दिष्ट पृष्ठ आकार का उपयोग करने वाली सूचियों की सूची में विभाजित करता है.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

यह <code>list</code> को सूचियों की एक ऐसी सूची में विभाजित करता है, जहाँ आउटपुट सूची का पहला तत्व वह सूची होती है जिसमें     स्रोत सूची के प्रथम <code>pageSize</code> तत्व शामिल हों, आउटपुट सूची का अगला तत्व वह सूची होती है जिसमें स्रोत सूची के अगले <code>pageSize</code> तत्व शामिल होते हैं,इत्यादि.



## Category
List.Transformation functions
