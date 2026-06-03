# Téléchargement groupé du catalogue du vendeur 

La fonctionnalité de téléchargement groupé du catalogue du vendeur permet aux vendeurs de télécharger, mettre à jour et supprimer des produits en masse à l'aide de fichiers CSV, XLS ou XLSX, ce qui leur permet de gagner du temps en gérant plusieurs produits à la fois au lieu de les gérer individuellement. 

<ImagePopup src="/images/multi-vendor-marketplace/1-data-transfer-settings.webp" alt="Customer Email and Password" /> 

### Comment importer des produits en masse 

**Étape 1 :** Accédez au **Panneau du vendeur → Paramètres → Transfert de données**, puis cliquez sur le bouton **Créer une importation**. 

<ImagePopup src="/images/multi-vendor-marketplace/2-data-transfer-settings.webp" alt="Customer Email and Password" /> 

**Étape 2 : Configurer les paramètres d'importation** 

Sous Configuration générale, renseignez les informations suivantes : 

**1) Type :** Les vendeurs ne peuvent importer des produits qu'en gros en utilisant cette option. 

**2) Fichier :** Téléchargez le fichier du produit au format CSV, XLS ou XLSX. Assurez-vous que tous les champs obligatoires sont remplis correctement. 

**Remarque :** Ceci prend en charge les types de produits simples, configurables, groupés et groupés. 

**3) Télécharger l'échantillon :** Téléchargez l'exemple de fichier de produit et assurez-vous que votre fichier de téléchargement suit le même format. 

**Remarque :** Tous les attributs requis doivent être renseignés pour une création de produit réussie. 

**4) Chemin du répertoire d'images :** Utilisez un chemin relatif sous /project-root/storage/import/app pour stocker les images de produits. 

**5) Télécharger des images (ZIP) :** Téléchargez toutes les images du produit ensemble dans un seul fichier ZIP. 

**6) Action :** Sélectionnez si vous souhaitez créer, mettre à jour ou supprimer des enregistrements de produits. 

**7) Stratégie de validation :** Choisissez d'ignorer les erreurs ou de s'arrêter en cas d'erreurs pendant le processus d'importation. 

**8) Erreurs autorisées :** Définissez le nombre d'erreurs qui peuvent être ignorées lors de l'importation de données. 

**9) Séparateur de champ :** Définissez le séparateur utilisé dans le fichier d'importation (comme une virgule). 

**10. Processus dans la file d'attente :** Activez cette option pour exécuter le processus d'importation dans la file d'attente en arrière-plan. 

<ImagePopup src="/images/multi-vendor-marketplace/3-import-products.webp" alt="Customer Email and Password" /> 

Après avoir terminé la configuration, cliquez sur le bouton **Enregistrer l'importation**. 

**Étape 3 :** Une fois que vous avez cliqué sur Enregistrer l'importation, le processus d'importation démarrera automatiquement. 

<ImagePopup src="/images/multi-vendor-marketplace/4-import.webp" alt="Customer Email and Password" /> 

**Étape 4 :** Cliquez sur le bouton Valider pour vérifier les données importées. 

<ImagePopup src="/images/multi-vendor-marketplace/5-validate.webp" alt="Customer Email and Password" /> 

**Étape 5 :** Après validation, cliquez sur le bouton Importer pour terminer le processus. 

<ImagePopup src="/images/multi-vendor-marketplace/6-imported-product.webp" alt="Customer Email and Password" /> 

### Fin de l'importation 

Après une importation réussie, le système affichera un résumé tel que : 

**1) Total des enregistrements créés :** Nombre de produits nouvellement créés. 

**2) Total des enregistrements mis à jour :** Nombre de produits mis à jour. 

**3) Total des enregistrements supprimés :** Nombre de produits supprimés. 

<ImagePopup src="/images/multi-vendor-marketplace/7-successfully-imported.webp" alt="Customer Email and Password" />


