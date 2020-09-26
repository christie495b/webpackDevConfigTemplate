<script>
  import "./welcome.scss";
  import Link from '../../components/router/Link.svelte';
</script>

<div id="layoutAuthentication">
  <div id="layoutAuthentication_content">
    <main>
      <div class="container">
        <div class="row justify-content-center">
          <div id="content">
            <Link page={{path: '/dashboard', name: 'Dashboard'}} >
              <img class="img-fluid h" src="image/login.png" alt="3 Guys coding."/>
            </Link>
          </div>
          <div id="background" />
        </div>
      </div>
    </main>
  </div>
</div>
