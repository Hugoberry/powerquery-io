---
title: Table.Schema
---

# Table.Schema


## Description

Επιστρέφει έναν πίνακα που περιέχει μια περιγραφή των στηλών (δηλαδή το σχήμα) του καθορισμένου πίνακα.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Επιστρέφει έναν πίνακα που περιγράφει τις στήλες του<code>table</code>.<br />Κάθε γραμμή στον πίνακα περιγράφει τις ιδιότητες μιας στήλης του <code>table</code>:<br /><table>  <tr>    <td><b>Column Name</b></td>    <td><b>Description</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Το όνομα της στήλης.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>Η θέση με βάση το 0 της στήλης στο<code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Το όνομα του τύπου της στήλης.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Το είδος του τύπου της στήλης.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Αν η στήλη μπορεί να περιέχει τιμές <code>null</code>.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Η αριθμητική βάση (π.χ. δυαδικό, δεκαδικό) των πεδίων <code>NumericPrecision</code> και <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Η ακρίβεια μιας αριθμητικής στήλης στη βάση που καθορίζεται από το <code>NumericPrecisionBase</code>. Αυτός είναι ο μέγιστος αριθμός ψηφίων που μπορούν να αναπαρασταθούν από μια τιμή αυτού του τύπου (συμπεριλαμβανομένων κλασματικών ψηφίων).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Η κλίμακα μιας αριθμητικής στήλης στη βάση που καθορίζεται από το <code>NumericPrecisionBase</code>. Αυτός είναι ο αριθμός των ψηφίων στο κλασματικό τμήμα μιας τιμής αυτού του τύπου. Η τιμή <code>0</code> υποδεικνύει μια σταθερή κλίμακα χωρίς κλασματικά ψηφία. Η τιμή <code>null</code> υποδεικνύει ότι η κλίμακα δεν είναι γνωστή (είτε επειδή είναι κινητή είτε επειδή δεν έχει οριστεί).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Ο μέγιστος αριθμός κλασματικών ψηφίων που υποστηρίζεται στο δεύτερο τμήμα μιας τιμής ημερομηνίας ή ώρας.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Ο μέγιστος αριθμός χαρακτήρων που επιτρέπεται σε μια στήλη <code>text</code> ή ο μέγιστος αριθμός byte που επιτρέπεται σε μια στήλη <code>binary</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Υποδεικνύει αν αυτή η στήλη μπορεί να έχει μεταβλητό μήκος (έως <code>MaxLength</code>) ή αν έχει σταθερό μέγεθος</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Το όνομα του τύπου της στήλης στο σύστημα εγγενούς τύπου της προέλευσης (π.χ. <code>nvarchar</code> για SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Η προεπιλεγμένη παράσταση για μια τιμή αυτής της στήλης στην εγγενή γλώσσα παράστασης της προέλευσης (π.χ. <code>42</code> ή <code>newid()</code> για SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Η περιγραφή της στήλης.</td>  </tr></table><br />



## Category
Table.Information
