// import { Strings } from './types';

/**
 * Config file for gift cards and availabilities
 *
 * Structure:
 * > language
 * > > region
 * > > > offerings
 */
export const strings = {
  // English
  en: {
    MAIN: {
      regions: ['USA', 'JPY'],
      connectButtonText: 'Connect',
      viewWallet: 'View Wallet',
      heroTitle: 'Spending UST is hard. We make it easy.',
      heroSubtitle: `We're the UST Virtual Card Gateway. Now, you can buy your girlfriend that  🎁  with all your LUNA/MIR/ANC gains. Redeem your UST Stablecoins for a <strong>Virtual Debit Card</strong> and/or <strong>Gift Cards</strong> at participating retailers.`,
      howItWorksTitle: 'How it works',
      howItWorksSubtitle:
        'We love UST so much, we want to live off it forever.<br><br>We built this out of a need to spend our UST - and adapted it to work for others too. We hope you share Terra Kado with others and give feedback about this platform - we hope to make it better.',
      howItWorksCards: [
        {
          icon: 'LightningIcon',
          title: 'Spend $UST!',
          description: `
            <p>
              It's never been easier to redeem UST for a gift card purchase - enabling you to shop with your UST.
              <br><br>
              <strong>KYC/AML is required to exchange UST for a purchase</strong>, and signup fees include:
            </p>
            <div class='cost-table'>
              <span>a $2.50 UST one-time fee</span>
              <span>a $1 UST + 1% tx fee on purchases</span>
            </div>
            <p>
              These support our tech infrastructure and 3rd party service costs that enable the UST Gift Card Gateway.
            </p>`
        },
        {
          icon: 'PlusIcon',
          title: 'Redeem How You Want',
          description: `<p>Purchase a Gift Card online or install the Terra Kado Chrome Extension today. Redeem a gift card for your exact purchase price - or buy one and share it with a friend - we're simplifying $UST checkout.<br><br>Currently we're providing Amazon gift card purchases, with many more coming soon.<br><br><strong>Have one in mind?</strong> Let us know!</p>`
        },
        {
          icon: 'AnalyticsIcon',
          title: 'Track Your Purchases',
          description: `<p>Review and manage your previous Gift Card UST transfers. We'll share your Gift Card with you how you want it - via email, chrome extension, or here.<br><br>We plan to provide <strong>more gift card options, feature updates, and new solutions</strong> that allow you to spend UST in unique ways.<br><br>Subscriptions, anyone?</p>`
        }
      ]
    },
    CARDS: {
      cardsTitle: 'Cards',
      cardsDescription: 'Select from one of our options below to get started.',
      regionsTitle: 'Regions',
      regions: [
        {
          region: 'USA',
          friendlyTitle: 'United States',
          cards: [
            {
              id: 'DOORDASH',
              denominations: [15.0, 200.0],
              shortDescription:
                '<p>Give the gift of food delivery with a DoorDash gift card. The DoorDash app connects your favorite people with the foods they love from more than 310,000 local and national restaurants across 4,000 cities in the US &amp; Canada. Gift food delivery for easier evenings, happier days, and more time to enjoy the people and things they love.</p>',
              longDescription:
                '<p>Give the gift of food delivery with a DoorDash gift card. The DoorDash app connects your favorite people with the foods they love from more than 310,000 local and national restaurants across 4,000 cities in the US &amp; Canada. Gift food delivery for easier evenings, happier days, and more time to enjoy the people and things they love.</p>',
              name: 'DoorDash',
              availableDeliveryTypes: ['DigitalDelivery', 'Links'],
              terms:
                '<p>Your Gift Card is redeemable towards eligible orders placed on <a href="https://www.doordash.com/en-US" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 0, 255);">www.doordash.com</a> or in the DoorDash app in the United States. Gift Cards are made available and provided by DoorDash Inc. Gift Cards are not redeemable for cash except when required by applicable law. For more information on the Gift Card Terms and Conditions, please visit <a href="https://help.doordash.com/consumers/s/article/doordash-gift-cards?language=en_US" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 0, 255);">dasherhelp.doordash.com/doordash-gift-cards</a> and also <a href="https://help.doordash.com/consumers/s/article/DoorDash-Gift-Cards-Terms?language=en_US" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 0, 255);">https://help.doordash.com/consumers/s/article/DoorDash-Gift-Cards-Terms?language=en_US</a></p>',
              disclaimer:
                '<p>Legal Disclaimer:  No more than $2000 may be loaded onto a gift card in a single day (including purchasing additional value and/or adding returns to a gift card).</p>',
              redemptionNote: 'Valid for use in the United States only',
              type: 'Digital',
              denominationType: 'Variable',
              meta: {
                supportsApiBalanceChecks: true,
                website: 'https://www.doordash.com/en-US',
                colors: {
                  primary: '#ff3008',
                  secondary: '#FFFFFF'
                },
                shippingConfiguration: {}
              },
              media: {
                faceplates: [
                  {
                    name: 'fp01',
                    path:
                      'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/DOORDASH_fp01.png'
                  }
                ],
                logo:
                  'https://d2g7ragyj76kvw.cloudfront.net/brands/logos/DOORDASH.svg'
              },
              cost: {
                fee: 0.25,
                discountPercentage: 4.55
              }
            },
            {
              id: 'UBEREATS',
              denominations: [15, 500],
              shortDescription:
                '<p>Gift Uber Eats to the people you care about, or add value to your Uber Eats account. \nThe Uber Eats app is the easy and reliable way to get the food you want, delivered fast and fresh. Tap the app and pick from hundreds of full menus from local restaurants and have your order delivered to you at Uber speed. Plus, payment is automatic—no cash, no card, no hassle.</p>',
              longDescription:
                '<p>Gift Uber Eats to the people you care about, or add value to your Uber Eats account.&nbsp;\nThe Uber Eats app is the easy and reliable way to get the food you want, delivered fast and fresh. Tap the app and pick from hundreds of full menus from local restaurants and have your order delivered to you at Uber speed. Plus, payment is automatic—no cash, no card, no hassle.&nbsp;</p>',
              name: 'Uber Eats®',
              availableDeliveryTypes: ['DigitalDelivery', 'Links'],
              terms:
                '<p><strong>Terms and Conditions</strong></p><p>\n</p><p>By using this gift card, you accept the following terms and conditions: This card is redeemable via the Uber®? or Uber Eats app within the U.S. in cities where Uber or Uber Eats is available. Funds do not expire. The card is non-reloadable and, except where required by law, cannot be redeemed for cash, refunded, or returned. You may be required to add a secondary payment method to use this gift card with the Uber or Uber Eats app. The card is not redeemable outside the U.S. Issuer is not responsible for lost or stolen cards, or unauthorized use. Depending on the state of purchase, this card is issued by Bancorp Card Services, Inc. or The Bancorp Bank. For full terms and conditions and customer service, visit <a href="https://www.uber.com/legal/gift-cards/en-us/">uber.com/legal/gift</a>.&nbsp;</p>',
              redemptionNote: 'Valid for use in the United States only',
              type: 'Digital',
              denominationType: 'Variable',
              meta: {
                supportsApiBalanceChecks: true,
                website: 'https://www.ubereats.com/',
                colors: {
                  primary: '#47a22d',
                  secondary: '#7dc240'
                },
                shippingConfiguration: {}
              },
              media: {
                faceplates: [
                  {
                    name: 'fp01',
                    path:
                      'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/UBEREATS_fp01.png'
                  }
                ],
                logo:
                  'https://d2g7ragyj76kvw.cloudfront.net/brands/logos/UBEREATS.svg'
              },
              cost: {
                fee: 0.25,
                discountPercentage: 3.25
              }
            },
            {
              id: 'XBOX',
              denominations: [5, 10, 15, 20, 25, 50, 100],
              shortDescription:
                '<p>NO EXPIRATION DATE OR SERVICE FEES</p><p>* Works at Microsoft Store on Xbox consoles (Xbox Live required), Windows 10 PCs, and online. Not redeemable in physical stores</p>',
              longDescription:
                '<p>NO EXPIRATION DATE OR SERVICE FEES</p><p>* Works at Microsoft Store on Xbox consoles (Xbox Live required), Windows 10 PCs, and online. Not redeemable in physical stores</p>',
              name: 'XBOX',
              availableDeliveryTypes: ['DigitalDelivery', 'Links'],
              terms:
                '<p><span style="color: rgb(0, 0, 0);">Once redeemed to your U.S. Microsoft account, the full code value will be applied and may be used for eligible purchases (exclusions apply) made directly at select Microsoft digital stores. Eligible purchases and prices vary by region, device, and over time. Geographic limitations, country and balance restrictions, taxes, and internet connection fees may apply. Paid subscriptions required for some content. Age restrictions apply. Except as required by law, codes cannot be redeemed or exchanged for cash and are not reloadable or refundable. To create a new Microsoft account or read full terms (which may change without notice), go to </span><a href="https://www.microsoft.com/cardterms" rel="noopener noreferrer" target="_blank" style="color: rgb(149, 79, 114);">microsoft.com/cardterms</a><span style="color: rgb(0, 0, 0);">. Void where prohibited or restricted by law. Cards and codes issued by and ©/™/®Microsoft Corp, a Washington Corporation, and/or its affiliates.</span></p>',
              redemptionNote: 'Valid for use in the United States only',
              type: 'Digital',
              denominationType: 'Fixed',
              meta: {
                supportsApiBalanceChecks: true,
                website: 'https://www.xbox.com/',
                colors: {
                  primary: '#007d26',
                  secondary: '#ffffff'
                },
                shippingConfiguration: {}
              },
              media: {
                faceplates: [
                  {
                    name: 'fp01',
                    path:
                      'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/XBOX_fp01.png'
                  }
                ],
                logo:
                  'https://d2g7ragyj76kvw.cloudfront.net/brands/logos/XBOX.svg'
              },
              cost: {
                fee: 0.25,
                discountPercentage: 8.41
              }
            },
            {
              id: 'PLAYSTATION',
              denominations: [10, 20, 25, 50, 100],
              shortDescription:
                '<p>Your PlayStation®Plus premium membership includes:</p><p>•\tAccess to an ever-expanding library of hit games</p><p>•\tOnline multiplayer on the PlayStation®4 system (you can continue to access online multiplayer on your PlayStation®3 and PlayStation®Vita systems without an active PlayStation Plus membership)</p><p>•\tBenefits across PS4™, PS3™, and PS Vita systems</p>',
              longDescription:
                '<p>Your PlayStation®Plus premium membership includes:\n•\tAccess to an ever-expanding library of hit games\n•\tOnline multiplayer on the PlayStation®4 system (you can continue to access online multiplayer on your PlayStation®3 and PlayStation®Vita systems without an active PlayStation Plus membership)\n•\tBenefits across PS4™, PS3™, and PS Vita systems</p>',
              name: 'Sony PlayStation®',
              availableDeliveryTypes: ['DigitalDelivery', 'Links'],
              terms:
                '<p>Terms and Conditions\nYour use of this PSNSM code (“Code”) constitutes your acceptance of these terms and any additional terms available at http://us.playstation.com/redemption. Activated Codes can only be redeemed through a Sony Entertainment Network (SEN) master account subject to prior acceptance of the SEN Terms of Service and User Agreement and applicable Privacy Policy available at http://us.playstation.com/redemption. PS4™, PS3™, PS Vita, and PSP® systems, personal computers, access to the internet, compatible hardware and software sold separately. Your account will only accept Codes from the country designated on your account. Code is not redeemable for cash, cannot be returned for cash or credit, and may not be used for any other purpose. Code will not be replaced if lost, destroyed, or stolen. Sony Computer Entertainment America LLC, its parent company, affiliated companies and licensors make no express or implied warranties with respect to Code, PSNSM or the availability of products or services. To the extent permitted by law, your sole and exclusive remedy is the replacement of Code. All rights are reserved. Terms of Code may change without notice. Void where prohibited or restricted by law. For assistance, contact http://us.playstation.com/Support.\nPlayStation, PSP and the “PS” Family Logo are registered trademarks, PS4 and PS3 are trademarks, and PSN and the PSN Logo are service marks of Sony Computer Entertainment Inc.</p>',
              redemptionNote: 'Valid for use in the United States only',
              type: 'Digital',
              denominationType: 'Fixed',
              meta: {
                supportsApiBalanceChecks: true,
                website: 'http://www.sony.com',
                colors: {
                  primary: '#2a5fbd',
                  secondary: '#000000'
                },
                shippingConfiguration: {}
              },
              media: {
                faceplates: [
                  {
                    name: 'fp01',
                    path:
                      'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/PLAYSTATION_fp01.png'
                  }
                ],
                logo:
                  'https://d2g7ragyj76kvw.cloudfront.net/brands/logos/PLAYSTATION.svg'
              },
              cost: {
                fee: 0.25,
                discountPercentage: 6.18
              }
            }
          ]
        }
      ]
    }
  },

  // Spanish
  es: [],

  // Japanese
  ja: {
    MAIN: {
      regions: ['USA', 'JPY'],
      connectButtonText: 'コネクト',
      viewWallet: 'ウォレットを表示',
      heroTitle: 'USTを使うのは難しいです。今、あなたは簡単にできます。',
      heroSubtitle:
        'あなたのすべてのLUNA / MIR / ANCの利益で見ているあなたのガールフレンドを購入したいですか？参加小売店でUSTステーブルコインをギフトカードに交換できるようになりました。'
    },
    CARDS: [
      {
        title: `Amazon.com Gift Card, USA`,
        description: `Each gift card can purchase up to $250 in Amazon products. Free delivery on millions of items with Prime. Low prices across earth's biggest selection of books, music, DVDs, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, groceries & just about anything else.`,
        redemptionInstructions: `<p>|&nbsp;&nbsp;<a href="http://www.amazon.com/gc-redeem">How to Use</a>&nbsp;&nbsp;|</p><p>To redeem your gift card visit&nbsp;<a href="http://www.amazon.com/redeem">www.amazon.com/redeem.</a></p><p>If you have questions about redeeming your gift card, please visit&nbsp;<a href="http://www.amazon.com/gc-redeem">www.amazon.com/gc-redeem.</a></p><p>&nbsp;</p>`,
        logo: 'AmazonLogo',
        cardMin: 10,
        cardMax: 250,
        region: 'USA',
        active: true,
        statusMessage: 'All items active',
        statusSymbol: '✅',
        catalogId: 'AX2401S1XJAV',
        utid: 'U974333',
        isWholeAmountValueRequired: false
      },
      {
        title: `Amazon.co.jp Gift Card, Japan`,
        description: `Each gift card can purchase up to $250 in Amazon products. Free delivery on millions of items with Prime. Low prices across earth's biggest selection of books, music, DVDs, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, groceries & just about anything else.`,
        redemptionInstructions: `<p><strong>Amazonギフト券をご利用いただくには、最初にアカウントにギフト券を登録します。</strong></p><ol>\t<li><a href="http://www.amazon.co.jp/giftcard/use">www.amazon.co.jp/giftcard/use</a>&nbsp;にアクセスする。</li>\t<li>サインインする</li>\t<li>ギフト券番号を入力し、「アカウントに登録する」をクリックする。</li>\t<li>登録されたギフト券の金額が画面右側に表示されます。</li>\t<li>ショッピングをお楽しみください。</li></ol><p>*Amazonギフト券は一度アカウントに登録すると、有効期限内は残高がゼロになるまでご利用いただけます。</p><p><strong>To redeem your Gift Certificates:</strong></p><ol>\t<li>Visit <a href="http://www.amazon.co.jp/giftcard/use">www.amazon.co.jp/giftcard/use</a></li>\t<li>Sign-in to your Amazon.co.jp account.</li>\t<li>Input Gift Certificate Code, and click &ldquo;Apply to Your Account&rdquo; button.</li>\t<li>The balance of Gift Certificate amount is shown at the right column.</li>\t<li>Please enjoy your shopping at Amazon.co.jp and Javari.jp!</li></ol><p>*Once Amazon Gift Certificate is added to your account, you will be able to keep using the gift certificate until the balance becomes 0 JPY before it is expired.</p>`,
        logo: 'AmazonLogo',
        cardMin: 10,
        cardMax: 500000,
        region: 'JPY',
        active: true,
        statusMessage: 'All items active',
        statusSymbol: '✅',
        utid: 'U974333',
        isWholeAmountValueRequired: false
      }
    ]
  },
  cn: []
};
