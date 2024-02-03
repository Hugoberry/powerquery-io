---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

MailChimp समाप्ति बिंदु से डेटा सहित तालिका लौटाता है.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

MailChimp API को कॉल करता है और परिणाम स्वरूप तालिका के रूप में डेटासेट लौटाता है. सभी परिणाम वाले पृष्ठों को स्वचालित रूप से खोजता है. ऐसे API समाप्ति बिंदु जहाँ पर JSON प्रतिसाद में मूल समाप्ति बिंदु और मुख्य entityName मेल न खाते हों, वहाँ पर वैकल्पिक entityName पैरामीटर का उपयोग किया जा सकता है.


## Examples

### Example #1 
MailChimp API की सूची समाप्ति बिंदु से डेटा की तालिका को पुल करता है.
```powerquery
MailChimp.Collection("सूचियाँ")
```

Result: 
```powerquery
सूची डेटा सहित तालिका.
```


### Example #2 
MailChimp API के अभियान-फ़ोल्डर समाप्ति बिंदु से डेटा की तालिका को पुल करता है.
```powerquery
MailChimp.Collection("अभियान-फ़ोल्डर", "फ़ोल्डर")
```

Result: 
```powerquery
अभियान-फ़ोल्डर डेटा सहित तालिका.
```



