<script>
    import './stats.scss';
    export let headerText;
   
</script>

<div class="card dashboard-card" >
    <div class="card-body">
      <p class="card-title stats-header">
        <small class="text-muted">{headerText}</small>
      </p>
      <p class="card-text">
          <slot></slot>
      </p>
    </div>
  </div>