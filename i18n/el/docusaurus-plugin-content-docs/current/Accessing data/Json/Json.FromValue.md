---
title: Json.FromValue
---

# Json.FromValue


## Description

Παράγει την αναπαράσταση JSON μιας δεδομένης τιμής.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Παράγει μια αναπαράσταση JSON μιας δεδομένης τιμής <code>value</code> με κωδικοποίηση κειμένου που καθορίζεται από <code>encoding</code>. Αν η κωδικοποίηση <code>encoding</code> παραλειφθεί, χρησιμοποιείται η κωδικοποίηση UTF-8. Οι τιμές αναπαρίστανται ως εξής:<br /> <ul>        <li>Οι τιμές null, κειμένου και οι λογικές τιμές αναπαρίστανται ως αντίστοιχοι τύποι JSON</li>        <li>Οι αριθμοί αναπαρίστανται ως αριθμοί σε JSON, με την εξαίρεση ότι τα <code>#infinity</code>, <code>-#infinity</code> και <code>#nan</code> μετατρέπονται σε null</li>        <li>Οι λίστες αναπαρίστανται ως πίνακες JSON</li>        <li>Οι εγγραφές αναπαρίστανται ως αντικείμενα JSON</li>        <li>Οι πίνακες αναπαρίστανται ως πίνακας αντικείμενων</li>        <li>Οι ημερομηνίες, οι ώρες, τα datetime, τα datetimezone και οι διάρκειες αναπαρίστανται ως κείμενο ISO-8601</li>        <li>Οι δυαδικές τιμές αναπαρίστανται ως κείμενο με κωδικοποίηση base 64</li>        <li>Οι τύποι και οι συναρτήσεις προκαλούν σφάλμα</li> </ul>    


## Examples

### Example #1 
Μετατρέπει μια σύνθετη τιμή σε JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
