---
title: Duration.ToText
---

# Duration.ToText


## Description

Επιστρέφει το κείμενο της μορφής &#34;η.ω:λ:δ&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Επιστρέφει μια αναπαράσταση κειμένου στη μορφή day.hour:mins:sec της δεδομένης τιμής διάρκειας, <code>duration</code>. <ul>        <li><code>duration</code>: Μια διάρκεια <code>duration</code> από την οποία υπολογίζεται η αναπαράσταση κειμένου.</li>  <li><code>format</code>: <i>[Προαιρετικό]</i> Υπό απόσυρση, θα παρουσιάσει σφάλμα, αν δεν έχει τιμή null</li>      </ul>


## Examples

### Example #1 
Μετατρέψτε την &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; σε τιμή κειμένου.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
