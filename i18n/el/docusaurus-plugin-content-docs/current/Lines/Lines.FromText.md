---
title: Lines.FromText
---

# Lines.FromText


## Description

Μετατρέπει μια τιμή κειμένου σε λίστα τιμών κειμένου διαιρεμένων με αλλαγές γραμμής. Αν το includeLineSeparators είναι true, οι χαρακτήρες αλλαγής γραμμής περιλαμβάνονται στο κείμενο.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Μετατρέπει μια τιμή κειμένου σε λίστα τιμών κειμένου διαιρεμένων με αλλαγές γραμμής. Αν το includeLineSeparators είναι true, τότε οι χαρακτήρες αλλαγής γραμμής περιλαμβάνονται στο κείμενο.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (προεπιλογή) Δεν χρειάζεται συμπεριφορά εισαγωγικών.</li>            <li><code>QuoteStyle.Csv:</code> Τα εισαγωγικά είναι σύμφωνα με το Csv. Για την οριοθέτηση αυτών των περιοχών χρησιμοποιείται ένας χαρακτήρας διπλών εισαγωγικών, ενώ για την υπόδειξη ενός μονού διπλού χαρακτήρα εισαγωγικών σε αυτήν την περιοχή χρησιμοποιείται ένα ζεύγος χαρακτήρων διπλών εισαγωγικών. </li>          </ul>        </div>    



## Category
Lines
