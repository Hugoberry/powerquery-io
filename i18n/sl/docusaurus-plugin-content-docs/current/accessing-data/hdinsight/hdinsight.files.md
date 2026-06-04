---
title: HdInsight.Files
---

# HdInsight.Files


Vrne tabelo, ki vsebuje lastnosti in vsebino zbirk dvojiških podatkov, najdenih v določenem vsebniku iz trezorja shrambe Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

Vrne tabelo, ki vsebuje vrstico za vsako datoteko zbirke dvojiških podatkov, najdeno v URL-ju vsebnika, `account`, iz trezorja shrambe Azure. Vsaka vrstica vsebuje lastnosti datoteke in povezavo do vsebine.



## Category
Accessing data
