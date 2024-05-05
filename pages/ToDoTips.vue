<script setup>
import { ref } from "vue";
import Tipp from "../components/Tipp.vue";
const headline = ref("Veränder mich")
</script>

<template>
    <div class="container">
        <Tipp name="Beispiel Tipp" text="Hier könnte ein Tipp stehen" />
        <Tipp name="File erstellung"
            text="Erstelle eine neue File im Pages Ordner mit dem Namen ToDo erstelle desweiteren eine neue Component(List-Item) im components Folder." />
        <Tipp name="Liste richtig abspeichern und darstellen"
            text="Um elemente einfach hinzufügen und löschen zu können macht es sinn alle List-Items in einem Array zu speichern und mit v-for darzustellen" />
        <Tipp name="Liste dynamisch erstellen"
            text="Wenn du neue Einträge in das Array schreibst werden neue Elemente automatisch erstellt das Array kann auch aus einem Store kommen" />
        <Tipp name="Liste Löschen"
            text="Wenn du die Listen Elemente in einem Array abgespeichert hast kannst du einfach über einen Emit oder eine Veränderung im Store das Element aus dem Array löschen und das ganze Element wird gelöscht" />
        <Tipp name="Preis Anzeigen/nicht Anzeigen"
            text="Wenn kein Preis angegeben sollte man den Preis Text mit einem v-if disablen" />
        <Tipp name="Gesamt Preis berechnen"
            text="Um den Gesamtpreis zu berechnen loope einfach über das Array und addiere die Preise" />
    </div>
</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>