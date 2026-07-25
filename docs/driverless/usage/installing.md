---
title: Installing
sidebar_position: 1
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Installing

<DriverlessBanner />

There are two ways to get a driverless connector into a query, and they suit
different situations.

| | Paste the source | Load `PQDriverless.mez` |
|---|---|---|
| Setup | none | copy one file, change one setting, restart |
| Scope | the one file you paste it into | every file on that machine |
| Hosts | anywhere M runs — Desktop, Excel, dataflows, the Service | Power BI Desktop only |
| Works in the Service | yes, the M travels with the query | only through a gateway configured to allow custom connectors |
| Works on a locked-down desktop | yes | needs the Data Extensions setting changed |
| Updating | re-paste | replace the `.mez` |

Pasting is the path that survives an IT policy, because nothing is installed at
all — the reader is just part of your query. It is also the only path in Excel,
which has no custom-connector loader. The `.mez` is the convenience path when
you read these formats often in Power BI Desktop on a machine you control.

## Option 1 — paste the source

Each connector is one self-contained `.pq` file. There are no cross-file
references, deliberately: the paste is the product.

1. Open the `.pq` file for the connector you want from the
   [repository](https://github.com/Hugoberry/powerquery-driverless) and copy all
   of it.
2. In Power Query, **New Source → Blank Query**, then **Advanced Editor**.
3. Replace the contents with the pasted M and click **Done**.
4. **Rename the query to exactly the function name** — `Sqlite3.Database`,
   `Dbf.Table`, and so on. Power Query treats a query whose expression is a
   function as an invocable function, and the other queries find it by name.

Then call it from any other query:

```powerquery
let
    Source = Sqlite3.Database(File.Contents("C:\data\chinook.db")),
    Tracks = Source{[Name = "tracks"]}[Data]
in
    Tracks
```

:::note Two connectors need a second query
`Gpkg.Database` and `Mbtiles.Document` read files that *are* SQLite databases,
so they call `Sqlite3.Database` rather than embedding a second copy of the
b-tree parser. Paste both, and name the second query exactly
`Sqlite3.Database`. Every other connector is standalone.
:::

## Option 2 — load PQDriverless.mez

The `.mez` is a section document holding every connector, so all the functions
are available everywhere in Power BI Desktop without pasting anything.

1. Download `PQDriverless.mez` (see below).
2. Copy it to `[Documents]\Power BI Desktop\Custom Connectors` — create the
   folder if it isn't there. Power BI Desktop also reads
   `[Documents]\Microsoft Power BI Desktop\Custom Connectors`, the path
   Microsoft's own documentation gives; either one works. If your organisation
   redirects Documents to OneDrive, `[Documents]` means the redirected folder,
   not `%USERPROFILE%\Documents`.
3. In Power BI Desktop, **File → Options and settings → Options → Security →
   Data Extensions**, and select **(Not Recommended) Allow any extension to
   load without validation or warning**.
4. Restart Power BI Desktop.

The functions are then in the global namespace and callable from a blank query,
exactly as if you had pasted them:

```powerquery
Sqlite3.Database(File.Contents("C:\data\chinook.db"))
```

:::info No Get Data entry
`PQDriverless` publishes M functions, not data sources. It deliberately adds
nothing to the **Get Data** dialog and asks for no credentials of its own — the
connectors take a binary that you have already fetched, so authentication is
whatever `File.Contents`, `Web.Contents` or `SharePoint.Files` already does.
Call the functions from a blank query or the formula bar.
:::

:::caution Excel cannot load the `.mez`
Custom connectors are a Power BI Desktop feature. Excel's Power Query has no
Custom Connectors folder and no **Data Extensions** setting — its
**Query Options → Security** page offers only native database queries,
certificate revocation, web preview and ADFS. Microsoft's
[connector extensibility documentation](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-connector-extensibility)
covers Power BI Desktop exclusively and does not mention Excel.

In Excel, paste the source instead — Option 1 above. Nothing is lost by it:
each reader is one self-contained query and the M runs identically in either
host.
:::

:::caution That security setting is a real trade-off
The step 3 setting lets *any* unsigned extension in that folder load, not just
this one. It is the standard requirement for every uncertified custom connector,
and it is exactly the setting a locked-down organisation will refuse to change —
which is why pasting the source exists as an option, and why a signed build is
the answer for an enterprise deployment (see below).
:::

## Downloading

Grab `PQDriverless.mez` from the
[latest release](https://github.com/Hugoberry/powerquery-driverless/releases/latest).
Release assets are versioned, permanently linked and downloadable without a
GitHub account.

Every pull request also builds the package in CI, and the resulting
`PQDriverless-mez` artifact is attached to the workflow run. That is the way to
get an unreleased fix, with two caveats: **downloading an Actions artifact
requires being signed in to GitHub**, and GitHub re-zips artifacts on download,
so you get `PQDriverless-mez.zip` and must extract the `.mez` from it before
copying it to the connectors folder.

## Signed builds

The `.mez` above is unsigned, which is why it needs the permissive Data
Extensions setting. A **code-signed `.pqx`** removes that: the publisher's
certificate thumbprint is registered once by IT, after which the connector loads
under the *recommended* security setting, with no blanket "allow any extension"
policy in place.

That is the deployment story for an organisation that can't or won't loosen the
setting across its estate, and it comes with versioned builds and a support
contact rather than a GitHub issue queue.

If that is your situation, or you need a format that isn't in the list yet,
[open an issue](https://github.com/Hugoberry/powerquery-driverless/issues) or
say hello through the repository — sponsored format development and signed
builds are both available, and knowing which formats people actually need is
what drives the build order.
