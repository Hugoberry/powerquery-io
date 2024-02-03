---
title: Text.Combine
---

# Text.Combine


## Description

Συνενώνει μια λίστα τιμών κειμένου σε μία τιμή κειμένου.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Επιστρέφει το αποτέλεσμα του συνδυασμού της λίστας τιμών κειμένου, <code>texts</code>σε μία μόνο τιμή κειμένου. Όλες οι τιμές <code>null</code> που υπάρχουν στο <code>texts</code> παραβλέπονται.    Μπορεί να καθοριστεί ένα προαιρετικό <code>separator</code> που χρησιμοποιείται στο τελικό συνδυασμένο κείμενο.


## Examples

### Example #1 
Συνδυάστε τις τιμές κειμένου &#34;Seattle&#34; και &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Συνδυάστε τις τιμές κειμένου &#34;Seattle&#34; και &#34;WA&#34;, διαχωρισμένες με κόμμα και κενό διάστημα.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Συνδυάστε τις τιμές &#34;Seattle&#34;, &lt;code&gt;null&lt;/code&gt; και &#34;WA&#34;, που διαχωρίζονται με κόμμα και κενό διάστημα. (Σημειώστε ότι το &lt;code&gt;null&lt;/code&gt; παραβλέπεται.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
