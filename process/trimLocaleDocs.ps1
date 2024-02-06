$dirEn = "C:\git\hub\powerquery-io\docs"
$dirLocale = "C:\git\hub\powerquery-io\i18n\zh-Hant\docusaurus-plugin-content-docs\current"

# Get the list of files from both directories
$enFiles = Get-ChildItem -Path $dirEn -File -Recurse


foreach ($file in $enFiles) {
    # Calculate the relative path of the current file in relation to dirEn
    $relativePath = $file.FullName.Substring($dirEn.Length)

    # Construct the path to the corresponding file in the second directory
    $filePathLocale = Join-Path -Path $dirLocale -ChildPath $relativePath

    # Check if the corresponding file exists in the second directory
    if (Test-Path -Path $filePathLocale) {
        # Read the contents of both files
        $content1 = Get-Content -Path $file.FullName -Raw
        $content2 = Get-Content -Path $filePathLocale -Raw

        # Compare the contents of the two files
        if ($content1 -eq $content2) {
            # Delete the matching file from the second directory
            Remove-Item -Path $filePathLocale -Force
            Write-Host "Deleted matching file in second directory: $filePathLocale" -ForegroundColor Red
        }
    }
}

$mariaPath = Join-Path -Path $dirLocale -ChildPath "Accessing data\MariaDB\MariaDB.Contents.md"
Remove-Item $mariaPath -Force
