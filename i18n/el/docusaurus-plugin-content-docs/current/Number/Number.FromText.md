---
title: Number.FromText
---

# Number.FromText


## Description

Δημιουργεί αριθμούς από κοινές μορφές κειμένου (&#34;15&#34;, &#34;3.423,10&#34;, &#34;5,0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Επιστρέφει μια τιμή <code>number</code> από τη δεδομένη τιμή κειμένου <code>text</code>. <ul>  <li><code>text</code>: Η αναπαράσταση κειμένου μιας αριθμητικής τιμής. Η αναπαράσταση πρέπει να είναι σε μια κοινή αριθμητική μορφή - "15", "3.423,10", "5,0E-10".</li>  <li><code>culture</code>: Μια προαιρετική κουλτούρα που ελέγχει τον τρόπο ερμηνείας του <code>text</code> (για παράδειγμα, en-US).</li> </ul>


## Examples

### Example #1 
Λάβετε την αριθμητική τιμή του &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Λάβετε την αριθμητική τιμή του &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
