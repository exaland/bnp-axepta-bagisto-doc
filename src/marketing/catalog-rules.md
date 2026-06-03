# Règles du catalogue 

La règle du catalogue est une règle spéciale qui permet au client d'acheter le produit à des prix réduits définis par l'administrateur depuis le backend. Nous expliquerons ici comment définir les règles du catalogue dans ExalandStore. 

La règle du catalogue est appliquée au produit avant son placement dans le panier. Suivez l'étape ci-dessous « Comment définir les règles du catalogue dans ExalandStore ». 

### Étape 1 : Ajouter une nouvelle règle de catalogue 

a) Dans le panneau d'administration, accédez à **Marketing >> Promotions >> Règles du catalogue** 

b) Dans le coin supérieur droit, cliquez sur le bouton **Créer une règle de catalogue** comme indiqué ci-dessous. 

<ImagePopup src="/images/marketing/catalogRule.png" alt="Catalog" /> 

### Effectuez l'entrée suivante dans la section Informations sur la règle 

**1. Nom :-** Saisissez le nom de la nouvelle règle de catalogue. (uniquement pour référence interne) 

**2. Description : -** Entrez une description de la règle. (uniquement pour référence interne) 

**3. Statut : -** Définir le statut de la règle de catalogue est actif. 

**4. Canaux :-** Sélectionnez le canal sur lequel cette règle de catalogue sera appliquée. 

**5. Groupe de clients :-** Sélectionnez le groupe de clients sur lequel cette règle de catalogue sera appliquée. 

**6. Dates de début et de fin :-** Définissez la plage de dates à laquelle la règle de catalogue sera affectée. Si vous ne définissez pas les dates, la règle s'applique dès qu'elle est enregistrée. 

**7. Priorité : -** Entrez la priorité de cette règle. 

<ImagePopup src="/images/marketing/catalogConfigurations.png" alt="Catalog Configurations" /> 

### Étape 2 : Définir les conditions 

Toutes les conditions de la règle de catalogue sont basées sur l'attribut du produit. Si vous souhaitez appliquer la règle à tous les produits, ne posez aucune condition. Définissez le type de condition sur toutes les conditions vraies ou sur toute condition vraie. 

<ImagePopup src="/images/marketing/condition.png" alt="Condition" /> 

Cliquez ensuite sur Ajouter une condition pour définir les conditions. Sous la liste d'un attribut de produit, sélectionnez l'attribut que vous souhaitez définir pour la condition. 

<ImagePopup src="/images/marketing/catalogConditions.png" alt="Conditions" /> 

Par exemple, si vous avez sélectionné Catégories, vous devez choisir contient/ne contient pas et sélectionner la catégorie comme dans l'image ci-dessous. 

Si vous souhaitez supprimer une condition, cliquez sur l'icône de suppression. 

<ImagePopup src="/images/marketing/contains.png" alt="Contains" /> 

### Étape 3 : Définir les actions 

Dans la section Action, nous devons définir des actions telles que la manière dont nous souhaitons appliquer la règle au produit. 

<ImagePopup src="/images/marketing/catalogAction.png" alt="Catalog Action" /> 

**1. Type d'actions : -** Vous pouvez appliquer une remise sur une base de pourcentage ou sur une base de montant fixe. 

**2. Montant de la remise : -** Entrez le montant de la remise. 

**3. Mettre fin aux autres règles : -** Pour arrêter d'appliquer d'autres règles après l'application de cette règle, définissez « Oui ». Cela fonctionnera pour appliquer plusieurs remises sur le même produit. 

**Remarque : - Si vous souhaitez que plusieurs règles s'appliquent au produit, définissez « NON ». Dans ce cas, la règle ayant la priorité la plus élevée s'appliquera en premier.** 

**Enregistrez maintenant la règle de catalogue** et vous pourrez voir qu'une nouvelle **règle de catalogue** a été créée avec succès. 

<ImagePopup src="/images/marketing/catalogOutput.png" alt="Catalog Output" /> 

### Front-End : - 

Vous obtiendrez une réduction forfaitaire de 50 % sur le produit après avoir appliqué une règle de catalogue comme indiqué ci-dessous. 

<ImagePopup src="/images/marketing/catalogFront.png" alt="Catalog Front" /> 

Grâce à cela, vous pouvez facilement créer une **Règle de catalogue** dans ExalandStore.
