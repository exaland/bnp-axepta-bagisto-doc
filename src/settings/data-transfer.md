# Transfert de données | Téléchargement groupé 

L'importation en masse est une fonctionnalité qui permet aux utilisateurs d'importer de grandes quantités de données dans un système rapidement et efficacement. 

Cela simplifie le processus et fait gagner du temps en n'ayant pas à ajouter chaque information une par une. La fonctionnalité fonctionne différemment pour chaque système et présente une grande variété de cas d'utilisation dans de nombreux secteurs ainsi qu'ExalandStore. 

Vous pouvez facilement télécharger en masse **Produits, clients et taux de taxe**. 

### Étapes pour ajouter une importation groupée dans ExalandStore 

**Étape 1 :** Accédez au panneau d'administration d'ExalandStore, cliquez sur **Paramètres >> Transfert de données** et cliquez sur le bouton **Créer une importation**. 

<ImagePopup src="/images/settings/import.png" alt="Import" /> 

**Étape 2 :** Sous Configurations générales, sélectionnez les champs ci-dessous : 

**1) Type –** Veuillez sélectionner le type, c'est-à-dire (Produits, Clients, Taux d'imposition) que vous souhaitez importer. 

**2) Fichier –** Choisissez le fichier dans le format souhaité (CSV, XLS, XLSX) et assurez-vous d'avoir tous les champs requis dans le fichier. 

*Remarque – Lors de l'importation des données produit, les types de produits simples, configurables, virtuels, groupés et groupés peuvent être importés, à l'exception des produits téléchargeables.* 

**3) Télécharger l'échantillon –** Vous pouvez également télécharger les exemples de fichiers de types (Produits, Clients, Taux d'imposition). Veuillez vous assurer que le fichier que vous téléchargez est similaire à cet exemple de fichier. 

**4) Chemin du répertoire d'images –** Utilisez le chemin relatif vers /project-root/storage/import/app, par exemple. images de produits, images d'importation. 

**5) Action –** Veuillez sélectionner dans la configuration des paramètres que vous souhaitez créer/mettre à jour ou supprimer les enregistrements. 

**6) Stratégie de validation –** Cette fonctionnalité unique vous permet d'ignorer les erreurs ou de vous arrêter sur les erreurs lors de l'importation des données. 

**7) Erreurs autorisées –** Cette fonctionnalité vous permet de déterminer la quantité d'erreurs qui seront négligées lors de l'importation des données. 

**8) Séparateur de champs –** Cette fonctionnalité vous permet de définir les champs. 

**9) Processus en file d'attente –** Cette fonctionnalité vous permet d'exécuter votre processus d'importation dans une file d'attente. 

Alors maintenant, cliquez sur le bouton **Enregistrer l'importation**. 

<ImagePopup src="/images/settings/createImport.png" alt="Import" /> 

**Étape 3 :** Le processus d'importation va maintenant démarrer et une fois terminé, le processus d'importation du produit sera terminé. 

<ImagePopup src="/images/settings/importDone.png" alt="Import" /> 

**Étape 4 :** Vous pourrez désormais voir tous les produits dans la section **Catalogue >> Produits**, comme indiqué dans l'image donnée. 

<ImagePopup src="/images/settings/importOutput.png" alt="Import" /> 

En suivant les étapes ci-dessus, vous pouvez facilement créer une **importation groupée** dans ExalandStore.