cat > debug-entrypoint.sh <<'EOF'
#!/bin/sh
echo "==== DEBUG ENTRYPOINT ===="
echo "WORKDIR: $(pwd)"
echo "ls -la /app || true:"
ls -la /app 2>/dev/null || true
echo "ls -la . || true:"
ls -la . 2>/dev/null || true
echo "cat /app/package.json (if exists):"
cat /app/package.json 2>/dev/null || true
echo "cat /package.json (if exists):"
cat /package.json 2>/dev/null || true
echo "node -v:"
node -v 2>/dev/null || true
echo "npm -v:"
npm -v 2>/dev/null || true
echo "==== END DEBUG ===="
exec "$@"
EOF
chmod +x debug-entrypoint.sh
