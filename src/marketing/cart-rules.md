# Règles du panier 

Il est dans la nature humaine que chacun soit attiré par les offres, les soldes et les remises lors de ses achats. Une règle de panier est appliquée au produit dans le panier. Nous verrons ici comment définir les règles de panier dans ExalandStore. 

En l'utilisant, vous pouvez définir une ou plusieurs remises sur le même produit. Suivez les étapes ci-dessous pour savoir **comment définir les règles de panier dans ExalandStore**. 

### Étape 1 : Ajouter une nouvelle règle de panier 

1. Dans le panneau d'administration, accédez à **Marketing >> Promotions >> Règles du panier**. 
Cliquez sur **Créer une règle de panier** comme indiqué dans l'image ci-dessous. 

<ImagePopup src="/images/marketing/createCartrule.png" alt="Create Cart Rule" /> 

### Section d'informations sur les règles 

1. **Nom :** Saisissez le nom de la nouvelle règle de panier (uniquement pour référence interne). 

2. **Description :** saisissez une description de la règle (uniquement pour référence interne). 

3. **Statut :** Définissez le statut de la règle de panier sur Active. 

4. **Canaux :** Sélectionnez le canal sur lequel cette règle de panier sera appliquée. 

5. **Groupe de clients :** Sélectionnez le groupe de clients sur lequel cette règle de panier sera appliquée. 

6. **Type de coupon :** Sélectionnez le type de coupon avec ou sans coupon. Si vous souhaitez que la règle du panier s'applique à tous les paniers, définissez-la sur **Aucun coupon**. 

**Si vous souhaitez utiliser un coupon, sélectionnez Coupon spécifique et remplissez les champs suivants :** 

1. **Génération automatique du coupon :** Définissez Oui/Non. Si oui, le système génère automatiquement le coupon. Si non, saisissez le coupon manuellement. 

2. **Code promo :** Saisissez le code promo que les clients utiliseront lors du paiement. 

3. **Utilisations par coupon :** Définissez combien de fois le coupon peut être utilisé. Laissez vide pour illimité. 

4. **Utilisations par client :** Définissez combien de fois le même client peut utiliser la règle de panier. Laissez vide pour illimité. 

5. **Dates de début et de fin :** Définissez la plage de dates pendant laquelle la règle de panier sera active. Si elle est laissée vide, la règle s'applique dès sa sauvegarde. 

6. **Priorité :** Saisissez la priorité de cette règle. 

**Remarque :** La priorité est importante lorsque les produits remplissent les conditions définies pour plusieurs règles de panier. La priorité la plus élevée est 0. Ainsi, lorsque plusieurs conditions sont remplies, la règle ayant la priorité la plus élevée sera appliquée en premier. 

<ImagePopup src="/images/marketing/configurations.png" alt="Cart Rule Configurations" /> 

### Étape 2 : Définir les conditions 

Les conditions des règles de panier sont basées sur les attributs du panier, les attributs des articles du panier et les attributs du produit. 

Si vous souhaitez appliquer la règle à tous les produits, ne posez aucune condition. 

Vous pouvez définir le type de condition sur **toutes les conditions sont vraies** ou **n'importe quelle condition est vraie**. 

<ImagePopup src="/images/marketing/condition.png" alt="Set Cart Rule Conditions" /> 

Cliquez sur **Ajouter une condition** pour définir les conditions. Sous la liste des attributs du produit, sélectionnez l'attribut que vous souhaitez utiliser pour la condition. 

<ImagePopup src="/images/marketing/attributeCondition.png" alt="Attribute Condition" /> 

Par exemple, si vous sélectionnez **Catégories**, vous devez choisir entre *contient/ne contient pas* puis sélectionner la catégorie. 

Pour supprimer une condition, cliquez sur l'**icône Supprimer**. 

### Étape 3 : Définir les actions 

Dans la section Actions, définissez comment la règle s'appliquera aux produits. 

1. **Type d'action :** Appliquez une remise sur une base de pourcentage ou de montant fixe. 

2. **Montant de la remise :** Saisissez le montant de la remise. 

3. **Fin des autres règles :** Définissez Oui pour arrêter d'appliquer les autres règles une fois celle-ci appliquée. Utile pour plusieurs réductions. 

4. **Appliquer à l'expédition :** Définissez Oui/Non selon que vous souhaitez ou non appliquer la réduction à l'expédition. 

5. **Acheter X quantité :** Entrez le nombre de quantités requises. 

6. **Livraison gratuite :** Définissez Oui/Non selon que vous souhaitez ou non autoriser la livraison gratuite. 

7. **Quantité maximale autorisée à bénéficier d'une réduction :** Entrez la quantité maximale éligible à la réduction. 

Après la configuration, cliquez sur le bouton **Enregistrer la règle du panier**. 

Copiez maintenant le **Code promo** comme indiqué ci-dessous. 

<ImagePopup src="/images/marketing/couponCode.png" alt="Coupon Code Example" /> 

### Front-end 

Sur la **Page de paiement**, lorsque vous passez une commande, cliquez sur **Appliquer le coupon** comme indiqué ci-dessous. 

<ImagePopup src="/images/marketing/checkoutPage.png" alt="Checkout Page Coupon" /> 

Après avoir entré le code promo, cliquez sur le bouton **Appliquer**. 

<ImagePopup src="/images/marketing/applyCoupon.png" alt="Apply Coupon" /> 

Le **Coupon** est désormais appliqué avec succès. 

<ImagePopup src="/images/marketing/couponApplied.png" alt="Coupon Applied Successfully" /> 

En suivant les étapes ci-dessus, vous pouvez facilement créer des **Règles de panier** dans ExalandStore.
