const lines = [
    "[    0.000000] microcode: CPU0: patch_level=0x070c0603",
    "[    0.000000] microcode: CPU1: patch_level=0x070c0603",
    "[    0.000000] Linux version 5.15.0-50-generic (…) #56-Ubuntu SMP Wed Nov 10 2024",
    "[    0.000000] Command line: BOOT_IMAGE=/vmlinuz-5.15.0-50-generic root=UUID=… ro quiet splash",
    "[    0.000000] Kernel command line: BOOT_IMAGE=/vmlinuz…",
    "[    0.000000] ACPI: Supported 7 ACPI AML tables, 256 bits PM Timer Width",
    "[    0.000000] x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'",
    "[    0.000000] x86/fpu: Supporting XSAVE feature 0x002: 'SSE registers'",
    "[    0.000000] x86/fpu: Enabled xstate features 0x3, context size is 576 bytes",
    "[    0.000000] BIOS-provided physical RAM map:",
    "[    0.000000]  BIOS-e820: [mem 0x0000000000000000-0x000000000009ffff] usable",
    "[    0.000000]  BIOS-e820: [mem 0x0000000000100000-0x00000000bffeffff] usable",
    "[    0.000000]  BIOS-e820: [mem 0x00000000bfff0000-0x00000000bfffffff] reserved",
    "[    0.000000] memory: 163840K/1966080K available (1024K kernel code, 256K rwdata, 300K rodata)",
    "[    0.000000] random: get_random_u32 called from __kmem_cache_create+0x1a/0x4f0 with crng_init=0",
    "[    0.000000] ACPI: Interpreter enabled",
    "[    0.000000] ACPI: Core revision 20220331",
    "[    0.000000] PM: Registered nosave memory range: [mem 0x00000000-0x00000fff]",
    "[    0.000000] clocksource: tsc-early: mask: 0xffffffffffffffff max_cycles: 0x3b9aca00, max_idle_ns: 440795263123 ns",
    "[    0.000001] setup_percpu: NR_CPUS:32 nr_cpumask_bits:32 nr_cpu_ids:2 nr_node_ids:1",
    "[  OK  ] Mounted POSIX Message Queue File System.",
    "[  OK  ] Mounted Huge Pages File System.",
    "[  OK  ] Started Load Kernel Modules.",
    "[  OK  ] Started Remount Root and Kernel File Systems.",
    "[  OK  ] Started udev Coldplug all Devices.",
    "[  OK  ] Reached target System Initialization.",
    "[  OK  ] Listening on Journal Socket.",
    "[  OK  ] Started Journal Service.",
    "[  OK  ] Started Create Static Device Nodes in /dev.",
    "[  OK  ] Started udev Kernel Device Manager.",
    "[  OK  ] Started Name Service Cache Daemon.",
    "[  OK  ] Started Update UTMP about System Boot/Shutdown.",
    "[  OK  ] Started Network Name Resolution.",
    "[  OK  ] Started Network Manager.",
    "[  OK  ] Started Authorization Manager.",
    "[  OK  ] Started D-Bus System Message Bus.",
    "[  OK  ] Started Restore / Save the current clock.",
    "[  OK  ] Started Load/Save Random Seed.",
    "[  OK  ] Started LSB: AppArmor initialization.",
    "[  OK  ] Started LSB: AppArmor teardown.",
    "[  OK  ] Started GRUB failed boot detection.",
    "[  OK  ] Started Set console keymap.",
    "[  OK  ] Started Load Kernel Modules.",
    "[  OK  ] Started Apply Kernel Variables.",
    "[  OK  ] Started CLI Netfilter Manager.",
    "[  OK  ] Started Uncomplicated firewall.",
    "[  OK  ] Started Getty on tty1.",
    "[  OK  ] Started Permit User Sessions.",
    "[  OK  ] Reached target Multi-User System.",
    "[  OK  ] Reached target Graphical Interface.",
    "Welcome to Cotbert's Portfolio!"
  ];

  const container = document.getElementById("console");
  lines.forEach((text, idx) => {
    const div = document.createElement("div");
    div.classList.add("line");
    if (text.startsWith("[  OK")) div.classList.add("ok");
    else if (text.startsWith("Welcome")) div.classList.add("welcome");
    else div.classList.add("info");
    div.textContent = text;
    container.appendChild(div);

    setTimeout(() => {
      div.style.opacity = "1";
      container.scrollTop = container.scrollHeight;
    }, idx * 80);
  });

  setTimeout(() => {
      window.location.href = "main.html";
  }, 5000)