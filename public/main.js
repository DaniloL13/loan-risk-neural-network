console.log("top of file");
const FULLY_PAID_EXAMPLE = {
  loan_amnt: 12000,
  term: "36 months",
  emp_length: "10+ years",
  home_ownership: "MORTGAGE",
  annual_inc: 68000,
  purpose: "debt_consolidation",
  dti: 17.4,
  delinq_2yrs: 0,
  cr_hist_age_mths: 178,
  fico_range_low: 690,
  fico_range_high: 694,
  inq_last_6mths: 0,
  inv_mths_since_last_delinq: 80,
  inv_mths_since_last_record: "N/A",
  open_acc: 11,
  pub_rec: 0,
  revol_bal: 11510,
  revol_util: 51.3,
  total_acc: 24,
  collections_12_mths_ex_med: 0,
  inv_mths_since_last_major_derog: "N/A",
  application_type: "Individual",
  annual_inc_joint: "N/A",
  dti_joint: "N/A",
  acc_now_delinq: 0,
  tot_coll_amt: 0,
  tot_cur_bal: 94349,
  total_rev_hi_lim: 25200,
  acc_open_past_24mths: 4,
  avg_cur_bal: 8422,
  bc_open_to_buy: 5229,
  bc_util: 61.7,
  chargeoff_within_12_mths: 0,
  delinq_amnt: 0,
  mo_sin_old_il_acct: 129,
  mo_sin_old_rev_tl_op: 164,
  inv_mo_sin_rcnt_rev_tl_op: 8,
  inv_mo_sin_rcnt_tl: 6,
  mort_acc: 1,
  inv_mths_since_recent_bc: 6,
  inv_mths_since_recent_bc_dlq: "N/A",
  inv_mths_since_recent_inq: 6,
  inv_mths_since_recent_revol_delinq: "N/A",
  num_accts_ever_120_pd: 0,
  num_actv_bc_tl: 3,
  num_actv_rev_tl: 5,
  num_bc_sats: 4,
  num_bc_tl: 7,
  num_il_tl: 7,
  num_op_rev_tl: 7,
  num_rev_accts: 13,
  num_rev_tl_bal_gt_0: 5,
  num_sats: 11,
  num_tl_120dpd_2m: 0,
  num_tl_30dpd: 0,
  num_tl_90g_dpd_24m: 0,
  num_tl_op_past_12m: 2,
  pct_tl_nvr_dlq: 98.2,
  percent_bc_gt_75: 40,
  pub_rec_bankruptcies: 0,
  tax_liens: 0,
  tot_hi_cred_lim: 128354,
  total_bal_ex_mort: 39254,
  total_bc_limit: 16100,
  total_il_high_credit_limit: 33729,
};
const CHARGED_OFF_EXAMPLE = {
  loan_amnt: 15000,
  term: "36 months",
  emp_length: "10+ years",
  home_ownership: "RENT",
  annual_inc: 62000,
  purpose: "debt_consolidation",
  dti: 20.1,
  delinq_2yrs: 0,
  cr_hist_age_mths: 168,
  fico_range_low: 680,
  fico_range_high: 684,
  inq_last_6mths: 0,
  inv_mths_since_last_delinq: 80,
  inv_mths_since_last_record: "N/A",
  open_acc: 11,
  pub_rec: 0,
  revol_bal: 11376,
  revol_util: 55.4,
  total_acc: 24,
  collections_12_mths_ex_med: 0,
  inv_mths_since_last_major_derog: "N/A",
  application_type: "Individual",
  annual_inc_joint: "N/A",
  dti_joint: "N/A",
  acc_now_delinq: 0,
  tot_coll_amt: 0,
  tot_cur_bal: 66372,
  total_rev_hi_lim: 22500,
  acc_open_past_24mths: 5,
  avg_cur_bal: 6060,
  bc_open_to_buy: 3669,
  bc_util: 67.8,
  chargeoff_within_12_mths: 0,
  delinq_amnt: 0,
  mo_sin_old_il_acct: 127,
  mo_sin_old_rev_tl_op: 150,
  inv_mo_sin_rcnt_rev_tl_op: 7,
  inv_mo_sin_rcnt_tl: 5,
  mort_acc: 1,
  inv_mths_since_recent_bc: 12,
  inv_mths_since_recent_bc_dlq: "N/A",
  inv_mths_since_recent_inq: 5,
  inv_mths_since_recent_revol_delinq: "N/A",
  num_accts_ever_120_pd: 0,
  num_actv_bc_tl: 3,
  num_actv_rev_tl: 5,
  num_bc_sats: 4,
  num_bc_tl: 7,
  num_il_tl: 7,
  num_op_rev_tl: 8,
  num_rev_accts: 13,
  num_rev_tl_bal_gt_0: 5,
  num_sats: 11,
  num_tl_120dpd_2m: 0,
  num_tl_30dpd: 0,
  num_tl_90g_dpd_24m: 0,
  num_tl_op_past_12m: 2,
  pct_tl_nvr_dlq: 97.4,
  percent_bc_gt_75: 50,
  pub_rec_bankruptcies: 0,
  tax_liens: 0,
  tot_hi_cred_lim: 93775,
  total_bal_ex_mort: 40409,
  total_bc_limit: 13500,
  total_il_high_credit_limit: 34843,
};

$(document).ready(function () {
  console.log("here we are");
  $("#fully-paid-fill").click(function () {
    for (const [id, value] of Object.entries(FULLY_PAID_EXAMPLE)) {
      $(`#${id}`).val(value);
    }
  });
  $("#charged-off-fill").click(function () {
    for (const [id, value] of Object.entries(CHARGED_OFF_EXAMPLE)) {
      $(`#${id}`).val(value);
    }
  });

  $("#apiTest").submit(function () {
    $("button").attr("disabled", true);
    $("button", this).html(
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="sr-only">Uploading...</span>'
    );
    event.preventDefault();
    $.ajax({
      url: "/api/predict",
      type: "get",
      data: $(this).serialize(),
      success: function (result) {
        $("#apiOutput").text(JSON.stringify(result, null, 2));
        hljs.highlightBlock(document.getElementById("apiOutput"));
        $("#apiTest button").html("GET");
        $("button").removeAttr("disabled");
      },
    });
  });
});
