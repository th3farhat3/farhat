<!-- Load Facebook SDK for JavaScript -->
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/ar_AR/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<!-- Your customer chat code -->
<div class="fb-customerchat"
  attribution=setup_tool
  page_id="509783776052483"
  theme_color="#0057a0"
  logged_in_greeting="اهلا بك، اذا واجهتك أي مشكلة راسلنا عبر النموذج التالي، جولة سعيدة 🙂"
  logged_out_greeting="اهلا بك، اذا واجهتك أي مشكلة راسلنا عبر النموذج التالي، جولة سعيدة 🙂">
</div>
